import { writeFile } from "node:fs/promises";
import vm from "node:vm";

const SOURCE_REPOSITORY_URL = "https://github.com/drsanjaykhanna/ai-engineering-mcq";
const SOURCE_COMMIT = "da40d02c1a5285a95234a1129910106da232c146";
const SOURCE_FILE_URL = `https://raw.githubusercontent.com/drsanjaykhanna/ai-engineering-mcq/${SOURCE_COMMIT}/questions.js`;
const OUTPUT_FILE = new URL("../questions.js", import.meta.url);

const response = await fetch(SOURCE_FILE_URL);
if (!response.ok) {
  throw new Error(`Could not fetch ${SOURCE_FILE_URL}: ${response.status} ${response.statusText}`);
}

const sourceText = await response.text();
const sandbox = {};
vm.runInNewContext(`${sourceText}\nglobalThis.__importedQuestions = QUESTIONS;`, sandbox, { timeout: 1_000 });

if (!Array.isArray(sandbox.__importedQuestions)) {
  throw new Error("The source did not define a QUESTIONS array.");
}

const importedQuestions = sandbox.__importedQuestions.filter(isCompleteQuestion).map(normalizeQuestion);
if (importedQuestions.length === 0) {
  throw new Error("The source did not contain any complete four-choice questions.");
}

await writeFile(OUTPUT_FILE, formatQuestionBank(importedQuestions));
console.log(`Imported ${importedQuestions.length} questions from ${SOURCE_REPOSITORY_URL} at ${SOURCE_COMMIT}.`);

function isCompleteQuestion(question) {
  if (!question || typeof question !== "object" || !Number.isInteger(question.correct)) {
    return false;
  }
  if (!isNonEmptyString(question.id) || !isNonEmptyString(question.question) || !isNonEmptyString(question.topic)) {
    return false;
  }
  if (!Array.isArray(question.options) || !Array.isArray(question.explanation) || question.options.length !== 4 || question.explanation.length !== 4) {
    return false;
  }
  if (question.correct < 0 || question.correct > 3) {
    return false;
  }

  const options = question.options.map((option) => typeof option === "string" ? option.trim() : "");
  const explanations = question.explanation.map((explanation) => typeof explanation === "string" ? explanation.trim() : "");
  return options.every(Boolean)
    && explanations.every(Boolean)
    && new Set(options.map((option) => option.toLowerCase())).size === 4;
}

function normalizeQuestion(question) {
  return {
    id: `ai-engineering-mcq-${question.id}`,
    prompt: question.question.trim(),
    answers: question.options.map((text, index) => ({
      text: text.trim(),
      explanation: question.explanation[index].trim()
    })),
    correct: question.correct,
    tags: [slugify(question.topic)]
  };
}

function formatQuestionBank(questions) {
  const source = {
    name: "AI Engineering MCQ",
    url: `${SOURCE_REPOSITORY_URL}/blob/${SOURCE_COMMIT}/questions.js`,
    commit: SOURCE_COMMIT,
    license: "MIT"
  };
  const serializedQuestions = questions.map((question) => ({ ...question, source }));
  return `(function () {\n  "use strict";\n\n  globalThis.AI_ENGINEERING_QUIZ_QUESTIONS = ${JSON.stringify(serializedQuestions, null, 2)};\n})();\n`;
}

function slugify(value) {
  return value.toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

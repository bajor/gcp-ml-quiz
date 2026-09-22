"use strict";

require("../question-schema.js");
require("../questions.js");

const questions = globalThis.AI_ENGINEERING_QUIZ_QUESTIONS;
const errors = globalThis.AI_ENGINEERING_QUESTION_SCHEMA.validateQuestionBank(questions);

if (errors.length > 0) {
  throw new Error(`Question bank validation failed:\n${errors.join("\n")}`);
}
if (questions.length === 0) {
  throw new Error("Question bank must not be empty.");
}

console.log(`Question bank validation passed for ${questions.length} questions.`);

# AI Engineering Quiz

[Open the quiz](https://bajor.github.io/gcp-ml-quiz/)

A plain static practice quiz for AI engineering, ML engineering, deployment, inference, evaluation, and MLOps. Every included question has exactly four choices and an explanation for the correct choice and every incorrect choice.

## Question Sources

| Question bank | Coverage | Format and use in this quiz |
| --- | --- | --- |
| [AI Engineering MCQ](https://github.com/drsanjaykhanna/ai-engineering-mcq) | AI engineering, deployment, MLOps, inference, evaluation, RAG, agents, and LLM systems | Primary direct-import source. The upstream README declares MIT licensing and requires four choices with detailed explanations for every option. The pinned snapshot currently supplies 237 qualifying questions. |
| [Machine Learning Zoomcamp](https://github.com/DataTalksClub/machine-learning-zoomcamp) | Classical machine learning, evaluation, deployment, Kubernetes, and KServe | ML/MLE reference source. Its homework commonly uses four choices plus coding, but solutions and community discussions do not give a polished explanation for every distractor. No questions are imported. |
| [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp) | MLflow, pipelines, deployment, monitoring, CI/CD, and infrastructure as code | MLOps reference source. Its four-choice homework and practical tasks have solutions, but not detailed explanations for every distractor. No questions are imported. |
| [ML-InterviewQs](https://github.com/dsgiitr/ML-InterviewQs) | ML theory, statistics, and algorithms | Interview-practice reference source. It is MIT-licensed, but uses question-and-solution pairs rather than four-choice MCQs with explanations for every option. No questions are imported. |

Only direct sources with reusable licensing, four distinct choices, one correct answer, and a nonempty explanation for all four choices may enter `questions.js`. Questions that fail any part of this contract are skipped. The quiz does not invent missing choices or explanations.

## Local Use

Open `index.html` in a browser. No build step, backend, or runtime dependencies are required.

## Question Bank Contract

`questions.js` is generated from a pinned upstream source. Each question has this shape:

```js
{
  id: "ai-engineering-mcq-unique-question-id",
  prompt: "Question text",
  answers: [
    { text: "Answer A", explanation: "Why this choice is correct or incorrect." },
    { text: "Answer B", explanation: "Why this choice is correct or incorrect." },
    { text: "Answer C", explanation: "Why this choice is correct or incorrect." },
    { text: "Answer D", explanation: "Why this choice is correct or incorrect." }
  ],
  correct: 0,
  tags: ["topic"],
  source: {
    name: "AI Engineering MCQ",
    url: "https://github.com/drsanjaykhanna/ai-engineering-mcq/blob/<commit>/questions.js",
    commit: "<commit>",
    license: "MIT"
  }
}
```

The browser validates the complete bank before starting. Invalid data prevents the quiz from starting and is logged in the browser console.

## Updating Imported Questions

`node scripts/import-ai-engineering-mcq.mjs` fetches the AI Engineering MCQ `questions.js` file at the commit pinned in that script. It imports only complete four-choice records, keeps each explanation attached to its option, adds source metadata, and writes the static local bank. Updating to another upstream revision requires deliberately changing the pinned commit.

Run `node scripts/validate-question-bank.js` after any question-bank change. The check verifies that every included question has source metadata, exactly four unique answer texts, a valid correct index, and a nonempty explanation for each choice.

## Import Flow

[Question import flow](visual-explanations/question-import.svg) documents the review-critical flow from the pinned upstream bank to browser rendering.

Before this change, `questions.js` was empty and the application supported only one question-level explanation. After this change, `scripts/import-ai-engineering-mcq.mjs` owns source retrieval and normalization, `question-schema.js` owns the import contract, `questions.js` contains only qualifying source-attributed records, and `app.js` renders every option's explanation after an answer is selected. Reviewers should verify the pinned source commit, the importer eligibility check, and that shuffled answers retain their matching explanations. `visual-explanations/question-import.svg` is a pull-request review artifact and the `Delete Visual Explanation SVGs` workflow removes it after the change reaches `main`.

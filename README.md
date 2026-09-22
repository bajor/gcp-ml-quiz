# AI Engineering Quiz

[Open the quiz](https://bajor.github.io/gcp-ml-quiz/)

A plain static practice quiz for AI engineering, ML engineering, deployment, inference, evaluation, and MLOps. Every included question has exactly four choices and an explanation for the correct choice and every incorrect choice.

## Question Sources

| Question bank | Coverage | Use in this quiz |
| --- | --- | --- |
| [Machine Learning Zoomcamp](https://github.com/DataTalksClub/machine-learning-zoomcamp) | Classical machine learning, evaluation, deployment, Kubernetes, and KServe | Close adaptations of 2025 homework questions. This quiz supplies the per-option explanations that the homework does not provide. |
| [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp) | MLflow, pipelines, deployment, monitoring, CI/CD, and infrastructure as code | Close adaptations of 2025 homework questions. This quiz supplies the per-option explanations that the homework does not provide. |
| [ML-InterviewQs](https://github.com/dsgiitr/ML-InterviewQs) | ML theory, statistics, algorithms, and deep learning | Adapted from its MCQ question-and-solution pairs. This quiz adds or revises distractors as needed to retain exactly four choices and explains each option. |

Each record links to the source file and pinned revision from which it was adapted. The Zoomcamp repositories do not specify a root license in the pinned revisions; their questions are credited as adaptations rather than copied verbatim. ML-InterviewQs is MIT-licensed.

## Local Use

Open `index.html` in a browser. No build step, backend, or runtime dependencies are required.

## Question Bank Contract

Each record in `questions.js` has this shape:

```js
{
  id: "unique-question-id",
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
    name: "Source name",
    url: "https://example.com/source",
    commit: "source-version",
    license: "license-name"
  }
}
```

The browser validates the complete bank before starting. Invalid data prevents the quiz from starting and is logged in the browser console. Run `node scripts/validate-question-bank.js` after any question-bank change.

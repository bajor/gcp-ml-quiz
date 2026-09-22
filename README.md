# GCP Machine Learning Quiz

[Open the quiz](https://bajor.github.io/gcp-ml-quiz/)

A plain static quiz for practicing Google Cloud machine learning product and capability selection.

## Status

The quiz framework is ready and the question bank is intentionally empty. Questions will be added in the next iteration.

## Local use

Open `index.html` in a browser. No build step, backend, or external dependencies are required.

## Question bank contract

Add questions to `questions.js` as objects with these fields:

```js
{
  id: "unique-question-id",
  type: "product_to_description", // or "description_to_product"
  prompt: "Question text",
  answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
  correct: 0,
  explanation: "Why the correct answer is the best fit.",
  tags: ["domain", "topic"],
  priority: "P0"
}
```

Each question requires exactly four unique answers and a valid zero-based `correct` index. The browser logs validation errors and does not start the quiz when the contract is violated.

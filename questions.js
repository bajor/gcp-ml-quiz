(function () {
  "use strict";

  const ML_ZOOMCAMP_EVALUATION_SOURCE = {
    name: "Machine Learning Zoomcamp",
    url: "https://github.com/DataTalksClub/machine-learning-zoomcamp/blob/75bb32cf6e66d9cf60525bdbc3724ee8fad14d59/cohorts/2025/04-evaluation/homework.md",
    commit: "75bb32cf6e66d9cf60525bdbc3724ee8fad14d59",
    license: "Not specified by upstream"
  };
  const ML_ZOOMCAMP_DEPLOYMENT_SOURCE = {
    name: "Machine Learning Zoomcamp",
    url: "https://github.com/DataTalksClub/machine-learning-zoomcamp/blob/75bb32cf6e66d9cf60525bdbc3724ee8fad14d59/cohorts/2025/05-deployment/homework.md",
    commit: "75bb32cf6e66d9cf60525bdbc3724ee8fad14d59",
    license: "Not specified by upstream"
  };
  const ML_ZOOMCAMP_KUBERNETES_SOURCE = {
    name: "Machine Learning Zoomcamp",
    url: "https://github.com/DataTalksClub/machine-learning-zoomcamp/blob/75bb32cf6e66d9cf60525bdbc3724ee8fad14d59/cohorts/2025/10-kubernetes/homework.md",
    commit: "75bb32cf6e66d9cf60525bdbc3724ee8fad14d59",
    license: "Not specified by upstream"
  };
  const MLOPS_EXPERIMENT_TRACKING_SOURCE = {
    name: "MLOps Zoomcamp",
    url: "https://github.com/DataTalksClub/mlops-zoomcamp/blob/dead66d7ec45ff70337238e97863c2324f906a74/cohorts/2025/02-experiment-tracking/homework.md",
    commit: "dead66d7ec45ff70337238e97863c2324f906a74",
    license: "Not specified by upstream"
  };
  const MLOPS_DEPLOYMENT_SOURCE = {
    name: "MLOps Zoomcamp",
    url: "https://github.com/DataTalksClub/mlops-zoomcamp/blob/dead66d7ec45ff70337238e97863c2324f906a74/cohorts/2025/04-deployment/homework.md",
    commit: "dead66d7ec45ff70337238e97863c2324f906a74",
    license: "Not specified by upstream"
  };
  const MLOPS_MONITORING_SOURCE = {
    name: "MLOps Zoomcamp",
    url: "https://github.com/DataTalksClub/mlops-zoomcamp/blob/dead66d7ec45ff70337238e97863c2324f906a74/cohorts/2025/05-monitoring/homework.md",
    commit: "dead66d7ec45ff70337238e97863c2324f906a74",
    license: "Not specified by upstream"
  };
  const MLOPS_BEST_PRACTICES_SOURCE = {
    name: "MLOps Zoomcamp",
    url: "https://github.com/DataTalksClub/mlops-zoomcamp/blob/dead66d7ec45ff70337238e97863c2324f906a74/cohorts/2025/06-best-practices/homework.md",
    commit: "dead66d7ec45ff70337238e97863c2324f906a74",
    license: "Not specified by upstream"
  };
  const ML_INTERVIEW_ML_SOURCE = {
    name: "ML-InterviewQs",
    url: "https://github.com/dsgiitr/ML-InterviewQs/blob/8c6d228b051af7ceb429e6322befda068964e6b5/questions/ml.yml",
    commit: "8c6d228b051af7ceb429e6322befda068964e6b5",
    license: "MIT"
  };
  const ML_INTERVIEW_DL_SOURCE = {
    name: "ML-InterviewQs",
    url: "https://github.com/dsgiitr/ML-InterviewQs/blob/8c6d228b051af7ceb429e6322befda068964e6b5/questions/dl.yml",
    commit: "8c6d228b051af7ceb429e6322befda068964e6b5",
    license: "MIT"
  };

  globalThis.AI_ENGINEERING_QUIZ_QUESTIONS = [
    {
      id: "ml-zoomcamp-auc-negative-feature",
      prompt: "When using one numerical feature as a classifier score, its ROC AUC is below 0.5. What should you try before comparing its predictive usefulness?",
      answers: [
        { text: "Negate the feature values and compute AUC again", explanation: "Correct. A feature with a negative relationship to the positive class can become a useful score after reversing its direction." },
        { text: "Replace every feature value with its mean", explanation: "Incorrect. Mean imputation removes variation and cannot reverse an informative negative relationship." },
        { text: "Set the classification threshold to 0.5", explanation: "Incorrect. ROC AUC evaluates ranking across thresholds, so choosing one threshold does not fix score direction." },
        { text: "Discard the target labels before recalculating AUC", explanation: "Incorrect. AUC requires ground-truth labels to measure how well scores rank positive examples." }
      ],
      correct: 0,
      tags: ["evaluation"],
      source: ML_ZOOMCAMP_EVALUATION_SOURCE
    },
    {
      id: "ml-zoomcamp-f1-purpose",
      prompt: "Why does the ML Zoomcamp evaluation homework use F1 in addition to precision and recall?",
      answers: [
        { text: "It combines precision and recall into one harmonic-mean score", explanation: "Correct. F1 summarizes the trade-off between precision and recall while penalizing a very low value in either metric." },
        { text: "It measures the probability calibration of a classifier", explanation: "Incorrect. Calibration compares predicted probabilities with observed frequencies; F1 uses thresholded predictions." },
        { text: "It removes the need to choose a classification threshold", explanation: "Incorrect. F1 is computed at a threshold, and the homework evaluates it across thresholds to find the maximum." },
        { text: "It is the same metric as ROC AUC", explanation: "Incorrect. ROC AUC measures ranking over all thresholds, whereas F1 is a threshold-specific precision-recall summary." }
      ],
      correct: 0,
      tags: ["evaluation"],
      source: ML_ZOOMCAMP_EVALUATION_SOURCE
    },
    {
      id: "ml-zoomcamp-pipeline-input",
      prompt: "A deployed lead-scoring pipeline starts with DictVectorizer followed by LogisticRegression. What input shape should its prediction service provide?",
      answers: [
        { text: "A list of feature dictionaries", explanation: "Correct. DictVectorizer transforms records represented as dictionaries into the feature matrix expected by the logistic-regression model." },
        { text: "A pre-tokenized text string", explanation: "Incorrect. This pipeline is for structured categorical and numeric features, not natural-language token sequences." },
        { text: "An image tensor with pixel values", explanation: "Incorrect. Neither DictVectorizer nor the stated logistic-regression pipeline consumes image tensors." },
        { text: "A CSV file path on the server", explanation: "Incorrect. A prediction endpoint should receive the client record; file loading is not the pipeline's input contract." }
      ],
      correct: 0,
      tags: ["deployment"],
      source: ML_ZOOMCAMP_DEPLOYMENT_SOURCE
    },
    {
      id: "ml-zoomcamp-kubernetes-smallest-unit",
      prompt: "In Kubernetes, what is the smallest deployable unit that a workload such as a model-serving application runs in?",
      answers: [
        { text: "Pod", explanation: "Correct. A Pod is Kubernetes' smallest deployable unit and contains one or more closely related containers." },
        { text: "Node", explanation: "Incorrect. A node is the machine that runs Pods, not the smallest application deployment unit." },
        { text: "Deployment", explanation: "Incorrect. A Deployment manages a replicated set of Pods and rollout behavior." },
        { text: "Service", explanation: "Incorrect. A Service provides stable networking to Pods; it does not run the workload itself." }
      ],
      correct: 0,
      tags: ["kubernetes"],
      source: ML_ZOOMCAMP_KUBERNETES_SOURCE
    },
    {
      id: "ml-zoomcamp-kind-load-image",
      prompt: "After building a local model-serving image, which kind command makes that image available to a kind Kubernetes cluster?",
      answers: [
        { text: "kind load docker-image", explanation: "Correct. This command loads a local Docker image into the nodes of an existing kind cluster." },
        { text: "kind create cluster", explanation: "Incorrect. This creates a cluster but does not load a locally built image into it." },
        { text: "kind build node-image", explanation: "Incorrect. This builds a Kubernetes node image rather than registering an application image with a cluster." },
        { text: "kubectl apply", explanation: "Incorrect. kubectl apply creates resources from manifests, but the cluster must already be able to resolve the image." }
      ],
      correct: 0,
      tags: ["kubernetes"],
      source: ML_ZOOMCAMP_KUBERNETES_SOURCE
    },
    {
      id: "mlops-zoomcamp-mlflow-artifact-root",
      prompt: "When starting a local MLflow tracking server with a SQLite backend store, which additional setting specifies where experiment artifacts are written?",
      answers: [
        { text: "default-artifact-root", explanation: "Correct. The backend store keeps metadata, while default-artifact-root configures the location for model files and other artifacts." },
        { text: "serve-artifacts", explanation: "Incorrect. This is not the option that supplies the artifact storage location requested by the homework." },
        { text: "artifacts-only", explanation: "Incorrect. Artifact storage alone would not configure a tracking server's artifact root alongside its backend store." },
        { text: "artifacts-destination", explanation: "Incorrect. This is not the MLflow server option used in the homework for the artifact-root path." }
      ],
      correct: 0,
      tags: ["experiment-tracking"],
      source: MLOPS_EXPERIMENT_TRACKING_SOURCE
    },
    {
      id: "mlops-zoomcamp-model-uri",
      prompt: "Which MLflow model URI identifies a model artifact produced by a particular run before registering it?",
      answers: [
        { text: "runs:/<RUN_ID>/model", explanation: "Correct. The runs URI scheme points to the model artifact logged under the specified MLflow run." },
        { text: "models:/<RUN_ID>/model", explanation: "Incorrect. The models URI scheme refers to registered models, not an arbitrary run artifact." },
        { text: "experiments:/<RUN_ID>/model", explanation: "Incorrect. MLflow does not use this URI scheme for run artifacts." },
        { text: "artifacts:/<RUN_ID>/model", explanation: "Incorrect. The documented run-artifact URI uses runs:, not artifacts:." }
      ],
      correct: 0,
      tags: ["experiment-tracking"],
      source: MLOPS_EXPERIMENT_TRACKING_SOURCE
    },
    {
      id: "mlops-zoomcamp-parquet-index",
      prompt: "When writing a batch-scoring result dataframe to Parquet for the deployment homework, why is index=False specified?",
      answers: [
        { text: "To write only the intended result columns instead of an extra dataframe index", explanation: "Correct. The result artifact should contain the ride identifier and prediction columns, not an implementation-specific index." },
        { text: "To make Parquet compression mandatory", explanation: "Incorrect. Compression is controlled separately; index=False only controls whether the dataframe index is stored." },
        { text: "To convert all columns to strings", explanation: "Incorrect. index=False does not alter the data types of the dataframe columns." },
        { text: "To upload the output automatically to cloud storage", explanation: "Incorrect. Writing a local Parquet file does not determine where it is uploaded." }
      ],
      correct: 0,
      tags: ["batch-deployment"],
      source: MLOPS_DEPLOYMENT_SOURCE
    },
    {
      id: "mlops-zoomcamp-monitoring-dashboard-path",
      prompt: "Where does the monitoring homework expect a saved Grafana dashboard configuration to be stored in the project?",
      answers: [
        { text: "project_folder/dashboards", explanation: "Correct. The monitoring project uses the dashboards directory for versioned dashboard configuration files." },
        { text: "project_folder/config", explanation: "Incorrect. General configuration belongs there, but the homework distinguishes dashboard files in their own directory." },
        { text: "project_folder/data", explanation: "Incorrect. Data directories hold datasets or outputs rather than Grafana dashboard definitions." },
        { text: "project_folder", explanation: "Incorrect. The expected layout uses a dedicated dashboards subdirectory, not the project root." }
      ],
      correct: 0,
      tags: ["monitoring"],
      source: MLOPS_MONITORING_SOURCE
    },
    {
      id: "mlops-zoomcamp-localstack-endpoint",
      prompt: "When using the AWS CLI with Localstack to test S3 interactions, which option directs a command to the local service?",
      answers: [
        { text: "--endpoint-url", explanation: "Correct. The endpoint URL overrides AWS's normal service endpoint so the CLI talks to Localstack." },
        { text: "--backend-store-uri", explanation: "Incorrect. This is associated with MLflow tracking configuration, not the AWS CLI endpoint." },
        { text: "--profile", explanation: "Incorrect. A profile selects credentials and defaults but does not by itself redirect requests to Localstack." },
        { text: "--version", explanation: "Incorrect. This prints the CLI version and does not affect a storage request." }
      ],
      correct: 0,
      tags: ["testing"],
      source: MLOPS_BEST_PRACTICES_SOURCE
    },
    {
      id: "ml-interview-batch-gradient-descent-order",
      prompt: "Which gradient-descent variant is unaffected by the ordering of examples within the training data for one update?",
      answers: [
        { text: "Batch gradient descent", explanation: "Correct. It computes each update from the complete training set, so permuting examples does not change that aggregate gradient." },
        { text: "Stochastic gradient descent", explanation: "Incorrect. It updates after individual examples, so example order changes the sequence of updates." },
        { text: "Mini-batch gradient descent", explanation: "Incorrect. The composition and order of mini-batches can change its intermediate updates." },
        { text: "Adam with single-example updates", explanation: "Incorrect. Like stochastic training, its step sequence depends on the order of examples." }
      ],
      correct: 0,
      tags: ["gradient-descent"],
      source: ML_INTERVIEW_ML_SOURCE
    },
    {
      id: "ml-interview-decision-tree-scaling",
      prompt: "Which common model does not generally require feature scaling before fitting?",
      answers: [
        { text: "Decision tree", explanation: "Correct. Tree splits compare feature values against thresholds, so rescaling a feature does not change the ordering used to choose splits." },
        { text: "Support vector machine with an RBF kernel", explanation: "Incorrect. Its distance-based kernel is sensitive to relative feature scales." },
        { text: "K-means clustering", explanation: "Incorrect. K-means uses distances, allowing a large-scale feature to dominate clustering." },
        { text: "Principal component analysis", explanation: "Incorrect. PCA is variance-sensitive, so unscaled features can dominate the components." }
      ],
      correct: 0,
      tags: ["feature-engineering"],
      source: ML_INTERVIEW_ML_SOURCE
    },
    {
      id: "ml-interview-random-forest-learning-rate",
      prompt: "Which statement is false when contrasting random forests and gradient boosting?",
      answers: [
        { text: "Both use a learning rate to minimize loss", explanation: "Correct. This is false: gradient boosting uses a learning rate for sequential updates, while random forests use independently trained trees and averaging." },
        { text: "Both are ensemble methods", explanation: "Incorrect. This statement is true because both combine predictions from multiple trees." },
        { text: "Gradient boosting commonly uses shallower trees than a random forest", explanation: "Incorrect. This is generally true because boosting often combines many weak, shallow learners." },
        { text: "Random-forest trees can be trained independently", explanation: "Incorrect. This is true: bagging permits independent tree construction before their predictions are aggregated." }
      ],
      correct: 0,
      tags: ["ensemble-learning"],
      source: ML_INTERVIEW_ML_SOURCE
    },
    {
      id: "ml-interview-ridge-feature-selection",
      prompt: "Which regularized regression method is not suitable when you specifically need coefficients of irrelevant features to become exactly zero?",
      answers: [
        { text: "Ridge regression", explanation: "Correct. Ridge shrinks coefficients toward zero but usually retains every feature with a nonzero coefficient." },
        { text: "Lasso regression", explanation: "Incorrect. Lasso's L1 penalty can set some coefficients exactly to zero, making it useful for feature selection." },
        { text: "A chi-square feature test", explanation: "Incorrect. This statistical test can be used to select categorical features based on association with the target." },
        { text: "ANOVA", explanation: "Incorrect. ANOVA can be used as a univariate feature-selection test for suitable feature and target types." }
      ],
      correct: 0,
      tags: ["regularization"],
      source: ML_INTERVIEW_ML_SOURCE
    },
    {
      id: "ml-interview-gru-activations",
      prompt: "Which statement about GRU update equations is false?",
      answers: [
        { text: "GRUs use only tanh activations", explanation: "Correct. This is false because GRU gates use sigmoid activations in addition to tanh for candidate state computation." },
        { text: "GRUs have a gating mechanism", explanation: "Incorrect. This statement is true: GRUs use update and reset gates." },
        { text: "LSTMs have a separate cell state", explanation: "Incorrect. This is true; the LSTM cell state is distinct from its hidden state." },
        { text: "A GRU typically has fewer parameters than a comparable LSTM", explanation: "Incorrect. This is generally true because a GRU uses fewer gates and no separate cell state." }
      ],
      correct: 0,
      tags: ["deep-learning"],
      source: ML_INTERVIEW_DL_SOURCE
    },
    {
      id: "ml-interview-dropout-inference",
      prompt: "What should happen to dropout layers during standard model evaluation or inference?",
      answers: [
        { text: "Disable dropout", explanation: "Correct. Inference uses the full learned network; the training-time random masking is turned off." },
        { text: "Increase the dropout rate", explanation: "Incorrect. Increasing random masking at evaluation would make predictions less stable and discard learned capacity." },
        { text: "Keep random masking active to reduce overfitting", explanation: "Incorrect. Dropout reduces overfitting during training, not by randomly masking units during normal inference." },
        { text: "Replace every dropout layer with batch normalization", explanation: "Incorrect. Batch normalization and dropout have different purposes; evaluation mode does not replace one with the other." }
      ],
      correct: 0,
      tags: ["deep-learning"],
      source: ML_INTERVIEW_DL_SOURCE
    }
  ];
})();

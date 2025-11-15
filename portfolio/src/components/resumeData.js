// resumeData.js

const resumeSections = [
  {
    subject: "Weather Data ETL Pipeline ",
    items: [
      "Designed and deployed a containerized ETL pipeline using Apache Airflow and Astronomer CLI to ingest and process real-time data from Open-Meteo API.",
      "Implemented dynamic task mapping and Python-native DAGs using Airflow's API for scalable and modular pipeline orchestration",
      "Enabled local development with a full Airflow stack (Scheduler, Triggerer, WebUI) running in Docker containers, simulating production grade workflows.",
    ],
    // liveLink: "https://yourproject.live",
    githubLink: "https://github.com/Prafful-Vyas/Weather-Data-ETL-Pipeline",
  },
  {
    subject: "Air Compressor Predictive Maintenance",
    items: [
      "Developed a predictive maintenance model by using Neural Networks Classification which classifies Bearings Status (Okay or Noisy) based on different input features.",
      "Used Standardization for Feature Scaling and Principal Component Analysis for feature selection.",
      "Used SMOTE-TOMEK resampling to handle data imbalance and evaluated model using ROC curve.",
    ],
    githubLink: "https://github.com/Prafful-Vyas/Air-Compressor-predictive-maintenance-using-ML",
    // No liveLink — button will not be shown
  },
  {
    subject: "Llama3 Fine-Tuning with QLoRa",
    items: [
      "Fine-tunes Meta's Llama3 model using QLoRA for efficient, low-resource sentiment analysis",
      "Implements 4-bit quantized adapters to reduce training time and memory footprint",
      "Built an end-to-end Jupyter Notebook pipeline, ready for containerization and CI/CD deployment",
    ],
    githubLink: "https://github.com/Prafful-Vyas/Llama3-finetuning-QLoRa/tree/main",
  },
];

export default resumeSections;

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
      "Built an end-to-end predictive maintenance pipeline for industrial air compressors using sensor data (vibration, noise, temperature, and power) to enable early detection of bearing failures.",
"Performed domain-driven feature engineering, including vibration magnitude analysis and windowed FFT-based frequency-domain features, to capture early degradation patterns before failure onset.",
"Trained and evaluated time-aware classification models with emphasis on failure recall, achieving ~89% recall for impending bearing failures while minimizing false negatives.",
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

// resumeData.js

const resumeSections = [
  {
    subject: "Weather Data ETL Pipeline ",
    items: [
      "Built an incremental ETL pipeline using Apache Spark (PySpark and Spark SQL) implementing Medallion Architecture (Bronze → Silver → Gold) to ingest, clean, and aggregate weather data in modular processing layers.",
      "Designed a metadata-driven partition processing system that detects new Hive-partitioned Parquet datasets (city, date) and processes only unprocessed partitions, enabling idempotent and efficient pipeline execution.",
      "Implemented distributed data transformations and aggregations with Spark SQL, generating daily weather analytics while improving query performance through partition pruning and schema normalization.",
    ],
    // liveLink: "https://yourproject.live",
    githubLink: "https://github.com/Prafful-Vyas/Weather-ETL-Pipeline",
  },
  {
    subject: "Air Compressor Predictive Maintenance",
    items: [
      "Built an end-to-end predictive maintenance pipeline for industrial air compressors using sensor data (vibration, noise, temperature, and power) to enable early detection of bearing failures.",
      "Performed domain-driven feature engineering, including vibration magnitude analysis and windowed FFT-based frequency-domain features, to capture early degradation patterns before failure onset.",
      "Trained and evaluated time-aware classification models with emphasis on failure recall, achieving ~89% recall for impending bearing failures while minimizing false negatives.",
    ],
    githubLink:
      "https://github.com/Prafful-Vyas/Air-Compressor-predictive-maintenance-using-ML",
    // No liveLink — button will not be shown
  },
  {
    subject: "Llama3 Fine-Tuning with QLoRa",
    items: [
      "Fine-tunes Meta's Llama3 model using QLoRA for efficient, low-resource sentiment analysis",
      "Implements 4-bit quantized adapters to reduce training time and memory footprint",
      "Built an end-to-end Jupyter Notebook pipeline, ready for containerization and CI/CD deployment",
    ],
    githubLink:
      "https://github.com/Prafful-Vyas/Llama3-finetuning-QLoRa/tree/main",
  },
];

export default resumeSections;

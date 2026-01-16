🚗 Vehicle Insurance MLOps Pipeline

End-to-End Machine Learning Operations Project

This project demonstrates a complete production-ready MLOps pipeline built around a real-world Vehicle Insurance dataset.
It covers the entire lifecycle of a machine learning system — from raw data ingestion to cloud deployment with CI/CD automation.

The goal of this project is to showcase industry-level MLOps practices using modern tools such as MongoDB,FastAPI, AWS, Docker, GitHub Actions, and EC2, making it ideal for portfolio.

🧩 Project Highlights

Modular & scalable project structure

MongoDB-based data ingestion

Robust logging & exception handling

Automated model training, evaluation & deployment

Model storage & versioning using AWS S3

CI/CD pipeline using Docker & GitHub Actions

Cloud deployment on AWS EC2

📁 Project Structure Initialization
Step 1: Generate Project Template

Run the template.py script to automatically generate the complete folder structure required for the project.

This ensures:

Clean code organization

Separation of concerns

Production-grade layout

📦 Package & Environment Setup
Step 2: Local Package Configuration

Local imports are enabled using:

setup.py

pyproject.toml

📌 A brief explanation of these files is provided in crashcourse.txt.

Step 3: Virtual Environment & Dependencies

Create and activate a virtual environment:

conda create -n vehicle python=3.10 -y
conda activate vehicle


Install all required dependencies:

pip install -r requirements.txt


Verify installation:

pip list

🗄️ MongoDB Data Storage
Step 4: MongoDB Setup (Local / Atlas)

Create a MongoDB project

Set up a cluster (local or Atlas)

Create database and collection

Store MongoDB connection URL securely using environment variables

$env:MONGODB_URL="mongodb://localhost:27017"

Step 5: Upload Dataset to MongoDB

Create a notebook/ folder

Add the dataset and a Jupyter notebook

Push cleaned data into MongoDB using PyMongo

✔️ Data can be verified using:

mongosh

MongoDB Compass (GUI)

📝 Logging, Exception Handling & EDA
Step 6: Logging & Custom Exceptions

Centralized logging system

Custom exception class for detailed error tracking

Tested using demo.py

Step 7: Exploratory Data Analysis & Feature Engineering

Data understanding & visualization

Feature selection & transformations

Output used directly in pipeline components

🔄 Data Ingestion Pipeline
Step 8: Data Ingestion

MongoDB connection logic implemented in configuration/

Data access logic placed in data_access/

Ingestion component fetches data and converts it to DataFrame

Artifacts tracked using artifact_entity.py

Run pipeline after setting environment variables.

🔍 Data Validation & Transformation
Step 9: Data Validation

Schema defined in schema.yaml

Validation checks:

Column presence

Data types

Missing values

Step 10: Data Transformation

Encoding categorical variables

Scaling numerical features

Final dataset prepared for training

🤖 Model Training
Step 11: Model Trainer

Model training logic implemented in model_trainer.py

Estimator abstraction added for flexibility

Best model saved as an artifact

☁️ AWS Integration (Model Evaluation & Deployment)
Step 12: AWS Setup

IAM user created

Programmatic access enabled

Credentials stored as environment variables

$env:AWS_ACCESS_KEY_ID="YOUR_KEY"
$env:AWS_SECRET_ACCESS_KEY="YOUR_SECRET"

Step 13: Model Evaluation & S3 Upload

AWS S3 bucket used for model storage

Model comparison & evaluation performed

Best model automatically pushed to S3

✔️ Enables:

Model versioning

Easy rollback

Cloud-based access

🚀 Prediction Pipeline & API
Step 14: Model Pusher & Prediction

Model pulled from S3

Prediction pipeline created

API built using Flask/FastAPI

Ready for real-time inference

Step 15: Web Interface

static/ for CSS & assets

templates/ for HTML pages

Simple UI to interact with the model

🔄 CI/CD with Docker & GitHub Actions
Step 16: Dockerization

Dockerfile created for application

.dockerignore added for optimization

Step 17: GitHub Actions Workflow

Automated build & push to AWS ECR

Secrets managed securely via GitHub

Continuous Integration & Deployment enabled

🖥️ AWS EC2 Deployment
Step 18: Production Deployment

EC2 instance launched (Free Tier compatible)

Docker installed on EC2

GitHub self-hosted runner configured

Application deployed via CI/CD pipeline

Access the application:

http://<EC2_PUBLIC_IP>:5080

🔁 End-to-End Workflow
MongoDB ➜ Data Ingestion ➜ Validation ➜ Transformation
➜ Model Training ➜ Evaluation ➜ S3 Deployment
➜ Docker ➜ GitHub Actions ➜ EC2

🎯 Why This Project Matters

Demonstrates real industry MLOps workflow

Uses production-grade tools

Clean, modular, scalable architecture

🤝 Connect

If you found this project useful or have suggestions, feel free to connect.
This project was built to learn, practice, and demonstrate real-world MLOps skills.
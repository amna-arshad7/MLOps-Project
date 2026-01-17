import React from 'react';
import { Database, ShieldCheck, Layers, BrainCircuit, Cloud, Server, Activity } from 'lucide-react';

const pipelineSteps = [
  {
    title: "Data Ingestion",
    icon: <Database className="text-emerald-400" />,
    desc: "Automated extraction of raw vehicle data from MongoDB Atlas. Data is then converted into structured DataFrames for processing.",
    label: "Core Data Stack",
    tech: "MongoDB Atlas | Python | DataAccess Objects"
  },
  {
    title: "Data Validation",
    icon: <ShieldCheck className="text-blue-400" />,
    desc: "Rigid schema validation against 'schema.yaml'. Performs data drift detection to ensure model reliability over time.",
    label: "Quality Assurance",
    tech: "YAML Configuration | Custom Validation Logic"
  },
  {
    title: "Feature Engineering",
    icon: <Layers className="text-yellow-400" />,
    desc: "Automated transformation pipelines for scaling and encoding. Ensures consistent feature sets for both training and inference.",
    label: "Transformation Pipeline",
    tech: "Scikit-Learn Pipeline | Pandas"
  },
  {
    title: "Model Training",
    icon: <BrainCircuit className="text-pink-400" />,
    desc: "XGBoost classifier training on processed data. Includes hyperparameter tuning and performance evaluation against baseline metrics.",
    label: "Machine Learning Core",
    tech: "XGBoost | Scikit-Learn | Training Pipeline"
  },
  {
    title: "Model Registry",
    icon: <Cloud className="text-purple-400" />,
    desc: "Approved artifacts are versioned and stored in AWS S3 as a central registry for production-ready models.",
    label: "Artifact Management",
    tech: "AWS S3 | Boto3 | Model Versioning"
  },
  {
    title: "CI/CD Deployment",
    icon: <Server className="text-orange-400" />,
    desc: "GitHub Actions automates the build process. Docker images are pushed to AWS ECR and deployed on EC2 instances.",
    label: "DevOps Infrastructure",
    tech: "Docker | AWS ECR | GitHub Actions"
  },
  {
    title: "Inference Service",
    icon: <Activity className="text-cyan-400" />,
    desc: "FastAPI endpoint serves real-time predictions by pulling the latest production-ready model from the S3 registry.",
    label: "Production API",
    tech: "FastAPI | AWS EC2 | Uvicorn"
  }
];

export default function Architecture() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 pt-20 pb-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Consistent Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold pb-3 leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            System Pipeline Architecture
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A production-grade MLOps workflow designed for high availability, 
            scalability, and automated model lifecycle management.
          </p>
        </div>

        {/* Visual Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pipelineSteps.map((step, index) => (
            <div key={index} className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group flex flex-col hover:scale-[1.02]">
              <div className="bg-slate-800/80 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-blue-600/20 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {step.desc}
              </p>
              <div className="pt-5 border-t border-slate-800/50">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-2">
                  {step.label}:
                </span>
                <p className="text-xs text-slate-300 font-mono italic">
                  {step.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
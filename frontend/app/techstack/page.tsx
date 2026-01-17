import React from 'react';
import { Code2, Database, Cloud, Terminal, Container, Layout } from 'lucide-react';

const techCategories = [
  {
    category: "Machine Learning",
    icon: <Code2 className="text-purple-400" />,
    tools: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "NumPy", "Joblib"]
  },
  {
    category: "Data & Storage",
    icon: <Database className="text-green-400" />,
    tools: ["MongoDB Atlas", "AWS S3", "Boto3", "PyMongo", "Artifact Stores"]
  },
  {
    category: "MLOps & Cloud",
    icon: <Cloud className="text-blue-400" />,
    tools: ["AWS EC2", "AWS ECR", "GitHub Actions", "Docker", "CI/CD Pipeline"]
  },
  {
    category: "Backend / API",
    icon: <Terminal className="text-orange-400" />,
    tools: ["FastAPI", "Uvicorn", "Pydantic", "Logging & Exceptions"]
  },
  {
    category: "Frontend & UI",
    icon: <Layout className="text-cyan-400" />,
    tools: ["Next.js 14", "Tailwind CSS", "TypeScript", "Lucide Icons", "Axios"]
  },
  {
    category: "Dev Tools",
    icon: <Container className="text-slate-400" />,
    tools: ["Git & GitHub", "VS Code", "Conda", "Docker Compose"]
  }
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-20 pb-12 px-8"> {/* Reduced pt-24 to pt-20 */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12"> {/* Reduced mb-16 to mb-12 */}
          <h1 className="text-4xl md:text-5xl font-extrabold pb-3 leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technology Ecosystem
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-2">
            A diverse stack of modern tools and frameworks used to build, 
            automate, and deploy this production-ready ML system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((tech, index) => (
            <div key={index} className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-800 hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-slate-800/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-slate-700">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 tracking-tight text-slate-100">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool, i) => (
                  <span key={i} className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-full text-[11px] font-medium text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
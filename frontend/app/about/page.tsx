import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-20 pb-12 px-8"> {/* Adjusted to pt-20 for consistency */}
      <div className="max-w-4xl mx-auto">
        {/* Main Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold pb-3 leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About the Engineer
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left Column: Brief Bio */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-800">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                <GraduationCap className="text-blue-400" /> Professional Background
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Currently pursuing a **BS in Artificial Intelligence**, I specialize in building 
                end-to-end MLOps systems. My focus is on bridging the gap between machine learning 
                research and production-ready software engineering. I have hands-on experience in 
                automating pipelines, managing cloud infrastructure, and deploying containerized models.
              </p>
            </section>

            <section className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-800">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
                <Target className="text-cyan-400" /> Project Objective
              </h2>
              <p className="text-slate-400 leading-relaxed">
                The **Vehicle Insurance Risk Prediction** project was developed as a comprehensive 
                showcase of MLOps best practices. From modular data ingestion with MongoDB to 
                automated CI/CD with GitHub Actions and AWS, every step is designed for 
                scalability and reliability.
              </p>
            </section>
          </div>

          {/* Right Column: Connect & Profile */}
          <div className="space-y-6">
            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-800 text-center">
              <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-blue-500">Connect</h3>
              <div className="flex flex-col gap-4">
                <SocialLink href="https://github.com/amna-arshad7" icon={<Github size={20}/>} label="GitHub" />
                <SocialLink href="https://linkedin.com/in/amna-arshad-56507b302" icon={<Linkedin size={20}/>} label="LinkedIn" />
                <SocialLink href="mailto:amnaarshad5689@gmail.com" icon={<Mail size={20}/>} label="Email Me" />
              </div>
            </div>
            
            <div className="p-6 bg-blue-600/10 border border-blue-500/30 rounded-3xl text-center">
              <p className="text-sm font-semibold text-blue-400 mb-1">Targeting Roles:</p>
              <p className="text-[11px] text-slate-300 italic uppercase tracking-wider font-medium">MLOps Engineer | ML Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-blue-600 transition-all duration-300 group"
    >
      <span className="text-blue-400 group-hover:text-white transition-colors">
        {icon}
      </span>
      <span className="text-sm font-bold text-slate-200">{label}</span>
      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
    </a>
  );
}
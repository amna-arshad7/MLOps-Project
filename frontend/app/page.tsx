import { ShieldCheck, Server, Database, Globe, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white pt-20 pb-12 px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 text-center">
        
        {/* Production Badge with Pulse (Blink) Animation */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <ShieldCheck size={16} />
          Production-Ready Vehicle Insurance Risk System
        </div>
        
        {/* Heading with Mixed Gradient Reflection */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">End-to-End </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            MLOps
          </span>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"> Pipeline</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
          An automated system for predicting vehicle insurance risks. 
          Built with a robust pipeline featuring MongoDB Atlas, AWS Infrastructure, and CI/CD automation.
        </p>

        {/* Buttons with Vibrant Glow & Reflection */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/prediction" className="group relative px-8 py-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center gap-2 overflow-hidden">
            <span className="relative z-10">Live Prediction</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          <Link href="/architecture" className="px-8 py-4 bg-slate-900 border border-slate-700 rounded-xl font-bold text-slate-200 hover:bg-slate-800 hover:border-slate-500 transition-all shadow-lg">
            View Architecture
          </Link>
        </div>
      </section>

      {/* Deployment Status Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatusCard icon={<Database size={20}/>} label="Database" value="MongoDB Atlas" color="text-green-400" glow="shadow-green-500/10" />
          <StatusCard icon={<Server size={20}/>} label="Deployment" value="AWS EC2" color="text-orange-400" glow="shadow-orange-500/10" />
          <StatusCard icon={<Globe size={20}/>} label="Model Registry" value="AWS S3" color="text-blue-400" glow="shadow-blue-500/10" />
          <StatusCard icon={<ShieldCheck size={20}/>} label="CI/CD" value="GitHub Actions" color="text-emerald-400" glow="shadow-emerald-500/10" />
        </div>
      </section>
    </main>
  );
}

function StatusCard({ icon, label, value, color, glow }: any) {
  return (
    <div className={`bg-slate-900/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/30 transition-all hover:shadow-2xl ${glow}`}>
      <div className={`p-3 rounded-xl bg-slate-800 ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{label}</p>
        <p className="text-sm font-semibold text-slate-200">{value}</p>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { Activity } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <Activity className="text-blue-500" />
        <span className="font-bold text-xl tracking-tight">InsureAI-Ops</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/architecture" className="hover:text-blue-400 transition">Architecture</Link>
        <Link href="/prediction" className="hover:text-blue-400 transition">Live Demo</Link>
        <Link href="/techstack" className="hover:text-blue-400 transition">Tech Stack</Link>
        <Link href="/about" className="hover:text-blue-400 transition">About Me</Link>
      </div>
      <Link href="https://github.com/amna-arshad7" className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold">
        GitHub
      </Link>
    </nav>
  );
}
"use client"
import { useState } from 'react';
import axios from 'axios';
import { Activity, AlertCircle, CheckCircle2, Car, User, ShieldCheck } from 'lucide-react';

export default function PredictionPage() {
    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const payload = new FormData();
        formData.forEach((value, key) => payload.append(key, value));

        try {
            // Replace with your EC2 Public IP:5080/predict
            const response = await axios.post('http://204.236.208.131:5000/predict', payload);
            setPrediction(response.data.includes("Response-Yes") ? "High Risk / Interested" : "Low Risk / Not Interested");
        } catch (error) {
            console.error("Inference Error:", error);
            alert("Backend connection failed. Please ensure FastAPI is running on EC2.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">
                
                {/* Consistent Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pb-2">
                        Vehicle Insurance Risk Assessment
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Leveraging production-ready ML pipelines to analyze customer risk profiles and insurance conversion probability in real-time.
                    </p>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <div className="lg:col-span-2 order-2 lg:order-1">
                        <form onSubmit={handleSubmit} className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Group: Customer Info */}
                                <div className="md:col-span-2 flex items-center gap-2 mb-2 text-blue-500 font-bold border-b border-slate-800 pb-2">
                                    <User size={18} /> <span>Customer Profile</span>
                                </div>
                                <InputField label="Age" name="Age" type="number" placeholder="e.g. 25" />
                                <SelectField label="Gender" name="Gender" options={[{l: "Male", v: 1}, {l: "Female", v: 0}]} />
                                <SelectField label="Driving License" name="Driving_License" options={[{l: "Yes", v: 1}, {l: "No", v: 0}]} />
                                <SelectField label="Previously Insured" name="Previously_Insured" options={[{l: "Yes", v: 1}, {l: "No", v: 0}]} />

                                {/* Group: Vehicle & Policy */}
                                <div className="md:col-span-2 flex items-center gap-2 mt-4 mb-2 text-cyan-500 font-bold border-b border-slate-800 pb-2">
                                    <Car size={18} /> <span>Vehicle & Policy Details</span>
                                </div>
                                <InputField label="Annual Premium" name="Annual_Premium" type="number" placeholder="e.g. 30000" />
                                <InputField label="Region Code" name="Region_Code" type="number" placeholder="e.g. 28" />
                                <InputField label="Vintage (Days)" name="Vintage" type="number" placeholder="e.g. 150" />
                                <InputField label="Sales Channel" name="Policy_Sales_Channel" type="number" placeholder="e.g. 152" />
                                
                                <SelectField label="Past Vehicle Damage" name="Vehicle_Damage_Yes" options={[{l: "Yes", v: 1}, {l: "No", v: 0}]} />
                                <SelectField label="Vehicle < 1 Year" name="Vehicle_Age_lt_1_Year" options={[{l: "Yes", v: 1}, {l: "No", v: 0}]} />
                                <SelectField label="Vehicle > 2 Years" name="Vehicle_Age_gt_2_Years" options={[{l: "Yes", v: 1}, {l: "No", v: 0}]} />

                                <div className="md:col-span-2 mt-8">
                                    <button 
                                        type="submit" 
                                        disabled={loading}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                                    >
                                        {loading ? <Activity className="animate-spin" /> : "Run Inference"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Result Section */}
                    <div className="lg:col-span-1 order-1 lg:order-2">
                        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-3xl text-center min-h-[300px] flex flex-col items-center justify-center">
                            {!prediction && !loading && (
                                <div className="flex flex-col items-center">
                                    <ShieldCheck size={48} className="text-slate-700 mb-4" />
                                    <p className="text-slate-500 text-sm italic">Ready to evaluate risk...</p>
                                </div>
                            )}

                            {loading && (
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                                    <p className="text-blue-400 font-medium animate-pulse">Analyzing Data...</p>
                                </div>
                            )}

                            {prediction && (
                                <div className={`w-full p-6 rounded-2xl border ${prediction.includes("High") ? 'bg-red-500/10 border-red-500/50 text-red-400' : 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'}`}>
                                    <div className="mb-4">
                                        {prediction.includes("High") ? <AlertCircle size={32} className="mx-auto" /> : <CheckCircle2 size={32} className="mx-auto" />}
                                    </div>
                                    <h3 className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-1">Final Result</h3>
                                    <p className="text-xl font-bold italic underline">{prediction}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputField({ label, name, type, placeholder }: any) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
            <input name={name} type={type} placeholder={placeholder} required className="bg-slate-800 border border-slate-700 rounded-xl p-3 focus:border-blue-500 outline-none transition text-sm" />
        </div>
    );
}

function SelectField({ label, name, options }: any) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
            <select name={name} className="bg-slate-800 border border-slate-700 rounded-xl p-3 focus:border-blue-500 outline-none transition text-sm cursor-pointer">
                {options.map((opt: any) => <option key={opt.v} value={opt.v} className="bg-slate-900">{opt.l}</option>)}
            </select>
        </div>
    );
}
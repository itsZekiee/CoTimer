import Header from "@/components/layout/Header";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  Calendar, 
  Activity,
  ArrowRight,
  MousePointer2
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=2070&auto=format&fit=crop" 
            alt="Analytics Data" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold mb-8 border border-teal-500/20 uppercase tracking-widest">
            PREDICTIVE INTELLIGENCE
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Advanced Analytics for <br/> <span className="text-teal-400">Velocity-Driven Teams</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12 leading-relaxed font-medium">
            Harness the Focus Velocity Index (FVI) and real-time variance modeling to predict project outcomes with surgical precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#006d6d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#005a5a] transition-all flex items-center gap-2">
              Optimize Performance <TrendingUp size={18} />
            </button>
            <button className="bg-transparent text-white border-2 border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
        
        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,64 C150,120 350,120 500,64 C650,8 850,8 1000,64 C1150,120 1350,120 1500,64 L1500,120 L0,120 Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Professional Flow Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-teal-600 font-bold text-xs tracking-widest uppercase">Enterprise Performance Metrics</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">Quantifying Professional Flow</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
            Our proprietary engine measures more than just hours. It provides a high-fidelity view of outcome probability and team momentum.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-12 rounded-3xl border border-slate-100 shadow-sm text-left relative overflow-hidden">
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-8 text-teal-600 border border-teal-100">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Focus Velocity Index (FVI)</h3>
                  <p className="text-slate-500 text-lg mb-10 max-w-xl font-medium leading-relaxed">
                    Our FVI algorithm correlates deep work intervals with output quality to produce a single source of truth for team momentum. This executive-grade metric provides the definitive benchmark for operational excellence and sustainable velocity.
                  </p>
                  <div className="flex gap-12 pt-6 border-t border-slate-100">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">ANCHOR ACCURACY</div>
                      <div className="text-3xl font-extrabold text-slate-900">99.4%</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">DATA UPDATE</div>
                      <div className="text-3xl font-extrabold text-slate-900">Real-time</div>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=2070&auto=format&fit=crop" alt="Abstract" className="w-full h-full object-cover" />
               </div>
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Allocation Variance</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-0">
                    Real-time discrepancy alerts between planned resource allocation and actual time-on-task.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Metrics Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-8">
                <Calendar size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Predictive Timelines</h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                Achieve 98% accuracy in project completion forecasts using our Bayesian modeling engine.
              </p>
              <button className="text-[#006d6d] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Explore Bayesian Engine <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-8">
                <Activity size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Actionable Intelligence</h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                Automated weekly reports highlight potential bottlenecks before they impact your bottom line.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Target size={14} className="text-teal-600" /> BURNOUT RISK DETECTION
                 </div>
                 <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Target size={14} className="text-teal-600" /> PROFITABILITY ANALYSIS
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-slate-900 rounded-[40px] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-500/20 to-transparent"></div>
            <div className="flex-1 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to stabilize your project velocity?</h2>
              <p className="text-slate-300 text-lg font-medium">
                Join over 200 high-performance enterprises using CoTimer to eliminate planning fallacy and drive consistent delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 relative z-10 shrink-0">
              <button className="bg-teal-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all text-sm">
                Optimize Performance
              </button>
              <button className="bg-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-white transition-all text-sm border border-white">
                Talk to an Analyst
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent"></div>
                </div>
                CoTimer
              </div>
              <p className="text-slate-500 text-sm max-w-xs font-medium">
                Built for high-performance teams. Proprietary software of Z Developers Ph.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest">Product</h4>
                <ul className="space-y-2 text-sm text-slate-500 font-medium">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Release Notes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest">Company</h4>
                <ul className="space-y-2 text-sm text-slate-500 font-medium">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest">Connect</h4>
                <ul className="space-y-2 text-sm text-slate-500 font-medium">
                  <li>LinkedIn</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © 2024 CoTimer Inc. All rights reserved. Built for high-performance teams.
          </div>
        </div>
      </footer>
    </main>
  );
}

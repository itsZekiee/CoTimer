import Header from "@/components/layout/Header";
import { 
  Heart, 
  ShieldAlert, 
  Network, 
  Zap, 
  Clock, 
  Activity,
  CheckCircle2
} from "lucide-react";

export default function StateSyncPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Server Rack" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold mb-8 border border-teal-500/20 uppercase tracking-widest">
            <Activity size={14} className="animate-pulse" /> LIVE SPRINT SYNCHRONIZER
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Precision Alignment with <span className="text-teal-400">State Sync</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12 leading-relaxed font-medium">
            Eliminate temporal drift and state fragmentation in high-performance teams. State Sync provides a unified, decentralized heartbeat to keep every sprint participant perfectly aligned in real-time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#006d6d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#005a5a] transition-all">
              Start Syncing
            </button>
            <button className="bg-transparent text-white border-2 border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
              Technical Whitepaper
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

      {/* Architecture Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-teal-600 font-bold text-xs tracking-widest uppercase">Enterprise Synchronization Architecture</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">The Architecture of Certainty</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
            Our proprietary synchronization engine ensures that "now" means the same thing for every member of your team, regardless of latency or location.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart size={24} />, title: "UTC Heartbeat", desc: "A decentralized, high-frequency pulse that calibrates every client machine to a master atomic time standard, reducing drift to <10ms." },
              { icon: <ShieldAlert size={24} />, title: "Conflict Interception", desc: "Predictive algorithms identify overlapping state changes before they happen, suggesting resolution paths before data collisions occur." },
              { icon: <Network size={24} />, title: "Decentralized Mesh", desc: "No single point of failure. The synchronization mesh distributes state information horizontally across your local and remote nodes." },
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-2xl border border-slate-100 text-left hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-8 text-teal-600 border border-teal-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alignment Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 bg-white p-12 rounded-3xl border border-slate-200">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Real-Time Team Alignment</h2>
              <p className="text-slate-500 text-lg mb-10 max-w-xl font-medium">
                Visualize every interaction as it happens. State Sync mirrors task progression and resource allocation across your entire workspace dashboard instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 w-44">
                  <div className="w-20 h-2 bg-slate-200 rounded-full mb-3"></div>
                  <div className="w-28 h-2 bg-slate-100 rounded-full"></div>
                </div>
                <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 w-44">
                  <div className="w-20 h-2 bg-[#006d6d] rounded-full mb-3"></div>
                  <div className="w-28 h-2 bg-teal-100 rounded-full mb-4"></div>
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-[#006d6d] rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-[#005a5a] rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#004d4d] p-10 rounded-3xl text-white flex flex-col justify-end relative overflow-hidden">
               <Zap size={48} className="absolute top-10 right-10 opacity-20" />
               <div>
                  <h3 className="text-2xl font-bold mb-4">Zero Latency Perception</h3>
                  <p className="text-teal-100 text-sm font-medium leading-relaxed mb-0">
                    Optimistic UI updates coupled with background reconciliation mean your team never waits for a server response to continue working.
                  </p>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-center">
              <h4 className="font-bold text-slate-900 mb-2">Atomic Commits</h4>
              <p className="text-slate-500 text-sm font-medium">
                Ensure every sprint update is immutable and traceable. Every state change is timestamped by the global heartbeat for total auditability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Global Availability</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Enterprise-grade uptime for distributed global teams.
                </p>
              </div>
              <div className="text-4xl font-extrabold text-slate-900">99.99<span className="text-teal-600">%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to unify your workflow?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 font-medium text-lg">
            Join the 500+ high-performance teams using State Sync to achieve perfect operational harmony.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-teal-500 text-[#001f1f] px-10 py-4 rounded-lg font-bold hover:bg-teal-400 transition-all">
              Request Access
            </button>
            <button className="bg-transparent text-white border-2 border-white/20 px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
              Talk to an Architect
            </button>
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

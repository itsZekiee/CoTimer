import Header from "@/components/layout/Header";
import { 
  Zap, 
  Settings, 
  Layers, 
  Cpu, 
  Share2, 
  Code2, 
  Webhook, 
  LayoutGrid,
  MessagesSquare,
  Trello,
  Cloud
} from "lucide-react";

export default function IntegrationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Digital Connectivity" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold mb-8 border border-teal-500/20 uppercase tracking-widest">
            ENTERPRISE CONNECTIVITY
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            The Integration Engine.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12 leading-relaxed">
            Unify your entire enterprise stack into a single, high-performance ecosystem. CoTimer's Integration Engine automates state transformations between your most critical tools with surgical precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#006d6d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#005a5a] transition-all">
              Get Early Access
            </button>
            <button className="bg-transparent text-white border-2 border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
              Review API Docs
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

      {/* Connectivity Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-teal-600 font-bold text-xs tracking-widest uppercase">Enterprise Connectivity</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">Seamless Native Connectivity</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
            One-click deep integrations with the tools your team relies on. No middleware, no friction, just pure synchronization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <LayoutGrid size={24} />, title: "Jira", desc: "Bi-directional issue syncing and state mapping.", active: true },
              { icon: <MessagesSquare size={24} />, title: "Slack", desc: "Real-time alerts and slash command controls." },
              { icon: <Trello size={24} />, title: "Trello", desc: "Visual board mirrors and automated card movement." },
              { icon: <Cloud size={24} />, title: "Microsoft 365", desc: "Full Outlook calendar and Excel data harvesting." },
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${item.active ? 'bg-teal-50 border-teal-100 ring-1 ring-teal-600' : 'bg-white border-slate-100'} text-center hover:shadow-lg transition-all`}>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6 text-teal-600 border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-12 rounded-3xl border border-slate-200 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold mb-6 border border-teal-100 uppercase tracking-widest">
                  CORE TECHNOLOGY
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Automated State Transformers</h2>
                <p className="text-slate-500 text-lg mb-10 max-w-xl font-medium">
                  Move beyond basic triggers. Our transformers use logic-gated conditions to restructure data as it moves between services, ensuring your Trello labels match your Jira components perfectly.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: <Settings size={18} />, label: "Conditional Logic Filters" },
                    { icon: <Code2 size={18} />, label: "Regex Pattern Matching" },
                    { icon: <Share2 size={18} />, label: "Multi-target Distribution" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                      <div className="w-8 h-8 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <Webhook size={20} />
                  </div>
                  <div className="text-teal-600 font-bold text-[10px] uppercase tracking-widest mb-2">DEVELOPER FIRST</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Secure GraphQL API</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Ask for exactly what you need. Our GraphQL endpoint reduces over-fetching and provides type-safe access to your entire integration mesh.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <Zap size={20} />
                  </div>
                  <div className="text-teal-600 font-bold text-[10px] uppercase tracking-widest mb-2">REAL-TIME</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Global Webhooks</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Sub-second latency notifications for any state change in your connected stack. Fully customizable payloads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop" 
            alt="Data Center" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Connect Your Stack Today.</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 font-medium">
            Ready to eliminate the manual bridge? Deploy the Integration Engine in minutes and experience true workflow harmony.
          </p>
          <button className="bg-teal-400 text-[#001f1f] px-10 py-4 rounded-lg font-bold hover:bg-teal-300 transition-all">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
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

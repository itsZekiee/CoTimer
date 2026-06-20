import Header from "@/components/layout/Header";
import ContactForm from "@/components/ContactForm";
import { 
  Timer, 
  MousePointer2, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Users2,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Globe,
  Circle,
  Link2,
  Code2,
  X
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[55%] h-full hidden lg:block overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop")',
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f9f9] text-[#006d6d] text-xs font-bold mb-8 border border-[#e0f2f2] tracking-wider uppercase">
                <Zap size={14} className="text-[#006d6d]" />
                OPERATIONAL VELOCITY REDEFINED
              </div>
              <h1 className="text-6xl lg:text-[72px] font-bold text-[#1a1a1a] mb-8 tracking-tight leading-[1.1]">
                Synchronize Your<br/>
                Team's<br/>
                <span className="text-[#006d6d]">Operational<br/>Velocity.</span>
              </h1>
              <p className="max-w-xl text-lg text-gray-600 mb-10 leading-relaxed font-normal">
                Transform asynchronous time management into a structured, unified operational asset. Scale with surgical precision across global workflows.
              </p>
              <div className="flex flex-wrap justify-start gap-6">
                <button className="bg-[#006d6d] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#005a5a] transition-all shadow-xl shadow-teal-900/20">
                  Start Free Trial
                </button>
                <button className="bg-white text-[#1a1a1a] border-2 border-gray-200 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                  Watch Video
                </button>
              </div>
            </div>
            <div className="w-full lg:w-0 lg:hidden mt-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop" 
                  alt="Data Center" 
                  className="w-full h-auto object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="mb-20">
            <span className="text-[#006d6d] font-bold text-[10px] tracking-[0.2em] uppercase">Enterprise Connectivity</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4 mb-6 tracking-tight">Precision-Engineered Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <Timer size={24} className="text-[#006d6d]" />, title: "Live Sprint Synchronizer", desc: "Unified timer orchestration for global teams. Ensure every member is aligned with the current sprint heartbeat in real-time." },
              { icon: <MousePointer2 size={24} className="text-[#006d6d]" />, title: "Focus Velocity Index", desc: "Advanced algorithmic scoring of team productivity. Identify bottlenecks and throughput variances with surgical precision." },
              { icon: <Zap size={24} className="text-[#006d6d]" />, title: "Integration Engine", desc: "Deep hooks into Jira, Slack, and Trello. Automate state transitions based on operational data triggers." },
              { icon: <ShieldCheck size={24} className="text-[#006d6d]" />, title: "Enterprise Security", desc: "SOC2 compliance, SSO integration, and role-based access control for secure organizational scaling." },
              { icon: <BarChart3 size={24} className="text-[#006d6d]" />, title: "Predictive Analytics", desc: "Forecast sprint completion dates based on historical velocity trends and current team bandwidth." },
              { icon: <Users2 size={24} className="text-[#006d6d]" />, title: "Resource Allocation", desc: "Dynamic visual mapping of team capacity versus task load to prevent burnout and ensure optimal balance." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-none border border-slate-200 text-left hover:bg-slate-50 transition-all group">
                <div className="flex flex-col items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-normal text-center max-w-2xl mx-auto">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white relative border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-[#006d6d] font-bold text-[10px] tracking-[0.2em] uppercase">Pricing & Plans</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4 mb-6 tracking-tight">Scalable Investment Plans</h2>
            <p className="text-gray-500 font-normal">Choose the operational tier that matches your team's velocity and scale.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
              {/* Starter */}
            <div className="bg-white p-10 rounded-none border border-slate-200 flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Starter</span>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-[#1a1a1a]">$0/month</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 font-normal">For small teams finding their rhythm.</p>
              <div className="space-y-3 mb-10 flex-grow">
                {["Up to 5 Users", "Live Sprint Synchronizer", "Standard Integrations"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Circle size={12} className="text-gray-400" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full py-4 bg-[#006d6d] text-white font-bold text-sm hover:bg-[#005a5a] transition-all">
                Get Started
              </button>
            </div>

            {/* Professional */}
            <div className="bg-white p-10 rounded-none border-2 border-[#006d6d] flex flex-col relative">
              <span className="text-[10px] font-bold text-[#006d6d] uppercase tracking-widest mb-2">Professional</span>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-[#1a1a1a]">user/mo</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 font-normal">Advanced velocity for growing teams.</p>
              <div className="space-y-3 mb-10 flex-grow">
                {["Unlimited Users", "Focus Velocity Index", "Custom Workflows", "24/7 Priority Support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Circle size={12} className="text-gray-400" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full py-4 bg-[#006d6d] text-white font-bold text-sm hover:bg-[#005a5a] transition-all">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-10 rounded-none border border-slate-200 flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Enterprise</span>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-[#1a1a1a]">Custom</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 font-normal">Tailored solutions for global scale.</p>
              <div className="space-y-3 mb-10 flex-grow">
                {["Unlimited Data Retention", "SSO & Advanced Security", "Dedicated Account Manager", "Custom API Access"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Circle size={12} className="text-gray-400" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full py-4 border border-slate-900 text-slate-900 font-bold text-sm hover:bg-slate-900 hover:text-white transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-24 bg-white relative border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-normal text-sm">Addressing enterprise concerns with transparency and precision.</p>
          </div>

          <div className="space-y-2">
            {[
              "How secure is our operational data?",
              "Can it integrate with our existing stack?",
              "How does CoTimer handle timezones?",
              "What is the implementation timeline?",
            ].map((q, i) => (
              <div key={i} className="border border-slate-200 rounded-none p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                <span className="font-normal text-[#1a1a1a] text-sm">{q}</span>
                <ChevronDown size={16} className="text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <span className="text-[#006d6d] font-bold text-[10px] tracking-[0.2em] uppercase">Get in touch</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4 mb-4 tracking-tight">Connect with Our Strategy Team</h2>
            <p className="text-gray-500 text-sm font-normal max-w-2xl">
              Ready to redefine your operational velocity? Speak with a consultant to tailor CoTimer for your specific organizational structure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              {[
                { icon: <Mail size={18} />, title: "Email Support", content: "solutions@cotimer.com" },
                { icon: <Phone size={18} />, title: "Enterprise Sales", content: "(+63) 9123 4567 89" },
                { icon: <MapPin size={18} />, title: "Location", content: "123 St., Santa Maria, Bulacan, PH" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-gray-900 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">{item.title}</h4>
                    <p className="text-gray-600 font-normal text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">Ready to accelerate?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 font-normal">
            Join the ecosystem that transforms time into your team's most valuable operational asset. Experience the CoTimer difference today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#006d6d] text-white px-8 py-3 rounded-none font-bold text-sm hover:bg-[#005a5a] transition-all">
              Get Started Now
            </button>
            <button className="bg-white text-slate-900 border border-slate-300 px-8 py-3 rounded-none font-bold text-sm hover:bg-slate-50 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-1 text-sm font-bold text-gray-900 mb-4">
                <span className="text-[#006d6d]">▶</span> CoTimer
              </div>
              <p className="text-gray-500 text-xs font-normal leading-relaxed">
                Built for high-performance teams. Proprietary software of Z Developers Ph.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold text-gray-400 mb-6 uppercase text-[9px] tracking-[0.2em]">Product</h4>
                <ul className="space-y-3 text-[11px] text-blue-600 font-normal">
                  <li><a href="#" className="hover:underline">Features</a></li>
                  <li><a href="#" className="hover:underline">Pricing</a></li>
                  <li><a href="#" className="hover:underline">Release Notes</a></li>
                  <li><a href="#" className="hover:underline">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-400 mb-6 uppercase text-[9px] tracking-[0.2em]">Company</h4>
                <ul className="space-y-3 text-[11px] text-blue-600 font-normal">
                  <li><a href="#" className="hover:underline">About Us</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                  <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="#" className="hover:underline">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-400 mb-6 uppercase text-[9px] tracking-[0.2em]">Connect</h4>
                <ul className="space-y-3 text-[11px] text-blue-600 font-normal">
                  <li className="flex items-center gap-2"><Link2 size={12} /><a href="#" className="hover:underline">LinkedIn</a></li>
                  <li className="flex items-center gap-2"><X size={12} /><a href="#" className="hover:underline">X (Twitter)</a></li>
                  <li className="flex items-center gap-2"><Code2 size={12} /><a href="#" className="hover:underline">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 text-center text-gray-400 text-[9px] font-normal uppercase tracking-[0.2em]">
            © 2024 CoTimer Inc. All rights reserved. Designed for professional excellence.
          </div>
        </div>
      </footer>
    </main>
  );
}

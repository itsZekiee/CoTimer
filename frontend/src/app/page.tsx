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
  Send
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-6 border border-teal-100">
                <Zap size={14} className="fill-teal-700" />
                OPERATIONAL VELOCITY REDEFINED
              </div>
              <h1 className="text-5xl lg:text-[72px] font-bold text-[#001f1f] mb-8 tracking-tight leading-[1.1]">
                Synchronize Your <br/> Team's <br/>
                <span className="text-[#006d6d]">Operational <br/> Velocity.</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Transform asynchronous time management into a structured, unified operational asset. Scale with surgical precision across global workflows.
              </p>
              <div className="flex flex-wrap justify-start gap-4">
                <button className="bg-[#006d6d] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#005a5a] transition-all">
                  Start Free Trial
                </button>
                <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-lg font-bold text-base hover:bg-slate-50 transition-all">
                  Watch Video
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10 border-8 border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team working" 
                  className="w-full h-auto object-cover min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="mb-20">
            <span className="text-teal-600 font-bold text-xs tracking-widest uppercase">Enterprise Connectivity</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 tracking-tight">Precision-Engineered Capabilities</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Timer className="text-[#006d6d]" />, title: "Live Sprint Synchronizer", desc: "Unified timer orchestration for global teams. Ensure every member is aligned with the current sprint heartbeat in real-time." },
              { icon: <MousePointer2 className="text-[#006d6d]" />, title: "Focus Velocity Index", desc: "Advanced algorithmic scoring of team productivity. Identify bottlenecks and throughput variances with surgical precision." },
              { icon: <Zap className="text-[#006d6d]" />, title: "Integration Engine", desc: "Deep hooks into Jira, Slack, and Trello. Automate state transitions based on operational data triggers." },
              { icon: <ShieldCheck className="text-[#006d6d]" />, title: "Enterprise Security", desc: "SOC2 compliance, SSO integration, and role-based access control for secure organizational scaling." },
              { icon: <BarChart3 className="text-[#006d6d]" />, title: "Predictive Analytics", desc: "Forecast sprint completion dates based on historical velocity trends and current team bandwidth." },
              { icon: <Users2 className="text-[#006d6d]" />, title: "Resource Allocation", desc: "Dynamic visual mapping of team capacity versus task load to prevent burnout and ensure optimal balance." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-slate-100 text-left hover:shadow-xl hover:shadow-teal-900/5 transition-all group">
                <div className="w-12 h-12 bg-teal-50 rounded-xl shadow-sm flex items-center justify-center mb-8 border border-teal-100 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001f1f] mb-4">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-teal-600 font-bold text-xs tracking-widest uppercase">Pricing & Plans</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 tracking-tight">Scalable Investment Plans</h2>
            <p className="text-slate-500 font-medium">Choose the operational tier that matches your team's velocity and scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-10 rounded-2xl border border-slate-200 flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Starter</span>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$0</span>
                <span className="text-slate-400 font-medium">/month</span>
              </div>
              <p className="text-slate-500 text-sm mb-8 font-medium">For small teams finding their rhythm.</p>
              <div className="space-y-4 mb-10 flex-grow">
                {["Up to 5 Users", "Live Sprint Synchronizer", "Standard Integrations"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-[#006d6d]" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full py-3 border-2 border-slate-900 rounded-lg font-bold text-sm hover:bg-slate-900 hover:text-white transition-all">
                Get Started
              </button>
            </div>

            {/* Professional */}
            <div className="bg-white p-10 rounded-2xl border-2 border-[#006d6d] flex flex-col relative shadow-2xl shadow-teal-900/10 scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#006d6d] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <span className="text-[10px] font-bold text-[#006d6d] uppercase tracking-widest mb-4">Professional</span>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$29</span>
                <span className="text-slate-400 font-medium">/user/mo</span>
              </div>
              <p className="text-slate-500 text-sm mb-8 font-medium">Advanced velocity for growing teams.</p>
              <div className="space-y-4 mb-10 flex-grow">
                {["Unlimited Users", "Focus Velocity Index", "Custom Workflows", "24/7 Priority Support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-[#006d6d]" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-[#006d6d] text-white rounded-lg font-bold text-sm hover:bg-[#005a5a] transition-all shadow-lg shadow-teal-700/20">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-10 rounded-2xl border border-slate-200 flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Enterprise</span>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">Custom</span>
              </div>
              <p className="text-slate-500 text-sm mb-8 font-medium">Tailored solutions for global scale.</p>
              <div className="space-y-4 mb-10 flex-grow">
                {["Unlimited Data Retention", "SSO & Advanced Security", "Dedicated Account Manager", "Custom API Access"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-[#006d6d]" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full py-3 border-2 border-slate-900 rounded-lg font-bold text-sm hover:bg-slate-900 hover:text-white transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium text-sm tracking-wide">Addressing enterprise concerns with transparency and precision.</p>
          </div>

          <div className="space-y-4">
            {[
              "How secure is our operational data?",
              "Can it integrate with our existing stack?",
              "How does CoTimer handle timezones?",
              "What is the implementation timeline?",
            ].map((q, i) => (
              <div key={i} className="border border-slate-100 bg-white rounded-xl p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                <span className="font-bold text-[#001f1f]">{q}</span>
                <ChevronDown size={18} className="text-[#006d6d]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-teal-600 font-bold text-xs tracking-widest uppercase">Get in touch</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-8 tracking-tight">Connect with Our Strategy Team</h2>
              <p className="text-slate-500 text-lg mb-12 font-medium">
                Ready to redefine your operational velocity? Speak with a consultant to tailor CoTimer for your specific organizational structure.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <Mail />, title: "Email Support", content: "solutions@cotimer.com" },
                  { icon: <Phone />, title: "Enterprise Sales", content: "(+63) 9123 4567 89" },
                  { icon: <MapPin />, title: "Location", content: "123 St., Santa Maria, Bulacan, PH" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 uppercase text-xs tracking-wider">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Ready to accelerate?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 font-medium">
            Join the ecosystem that transforms time into your team's most valuable operational asset. Experience the CoTimer difference today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#006d6d] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#005a5a] transition-all">
              Get Started Now
            </button>
            <button className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-[#001f1f] transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-[#001f1f] mb-6">
                <div className="w-8 h-8 bg-[#006d6d] rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent"></div>
                </div>
                CoTimer
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Built for high-performance teams. Proprietary software of Z Developers Ph.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Product</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-teal-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors">Release Notes</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-teal-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">Connect</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li className="flex items-center gap-2"><Globe size={16} /><a href="#" className="hover:text-teal-600 transition-colors">LinkedIn</a></li>
                <li className="flex items-center gap-2"><Send size={16} /><a href="#" className="hover:text-teal-600 transition-colors">X (Twitter)</a></li>
                <li className="flex items-center gap-2"><Globe size={16} /><a href="#" className="hover:text-teal-600 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © 2024 CoTimer Inc. All rights reserved. Designed for professional excellence.
          </div>
        </div>
      </footer>
    </main>
  );
}

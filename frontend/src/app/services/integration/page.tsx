import Header from "@/components/layout/Header";

export default function IntegrationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-white text-sm font-light">Service / Integration</span>
            <h1 className="text-6xl font-bold text-white mt-8 mb-8 leading-tight">
              The Integration Engine.
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-3xl mb-12">
              Unify your entire enterprise stack into a single, high-performance ecosystem. 
              CoTimer's Integration Engine automates state transformations between your most 
              critical tools with surgical precision.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-200 transition-all">
                Get Early Access
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-200 transition-all">
                Review API Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Enterprise Connectivity</h3>
              <p className="text-white text-lg">
                Connect your existing tools seamlessly with our robust API and pre-built connectors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Automated Workflows</h3>
              <p className="text-white text-lg">
                Reduce manual overhead by automating data flow between your platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

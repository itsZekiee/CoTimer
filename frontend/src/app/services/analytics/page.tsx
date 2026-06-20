import Header from "@/components/layout/Header";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-white text-sm font-light">Service / Data Analytics</span>
            <h1 className="text-6xl font-bold text-white mt-8 mb-8 leading-tight">
              Advanced Analytics for <br/> Velocity-Driven Teams
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-3xl mb-12">
              Harness the Focus Velocity Index (FVI) and real-time variance modeling 
              to predict project outcomes with surgical precision.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-200 transition-all">
                Optimize Performance
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-200 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Predictive Intelligence</h3>
              <p className="text-white text-lg">
                Utilize historical data and real-time metrics to forecast team productivity and project timelines.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Focus Velocity Index</h3>
              <p className="text-white text-lg">
                Gain deep insights into how your team works best and where improvements can be made.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Header from "@/components/layout/Header";

export default function StateSyncPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-white text-sm font-light">Service / State Sync</span>
            <h1 className="text-6xl font-bold text-white mt-8 mb-8 leading-tight">
              Precision Alignment with <span className="text-white">State Sync</span>
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-3xl mb-12">
              Eliminate temporal drift and state fragmentation in high-performance teams. 
              State Sync provides a unified, decentralized heartbeat to keep every sprint 
              participant perfectly aligned in real-time.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-200 transition-all">
                Start Syncing
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-200 transition-all">
                Technical Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Live Sprint Synchronizer</h3>
              <p className="text-white text-lg">
                Maintain a consistent state across all team members, ensuring everyone is working on the most up-to-date information.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Real-time Feedback</h3>
              <p className="text-white text-lg">
                Instant updates and notifications keep the team agile and responsive to changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

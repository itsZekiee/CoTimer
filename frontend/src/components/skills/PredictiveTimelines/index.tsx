export const PredictiveTimelines = () => {
  return (
    <div className="p-8 border rounded-lg bg-white shadow-sm">
      <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-4">Predictive Timelines</h3>
      <p className="text-slate-600 mb-6">Achieve 98% accuracy in project completion forecasts using our Bayesian modeling engine.</p>
      <a href="#" className="text-teal-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
        Explore Bayesian Engine 
        <span>→</span>
      </a>
    </div>
  );
};

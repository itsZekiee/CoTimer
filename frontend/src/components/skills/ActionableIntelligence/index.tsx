export const ActionableIntelligence = () => {
  return (
    <div className="p-8 border rounded-lg bg-white shadow-sm">
      <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-4">Actionable Intelligence</h3>
      <p className="text-slate-600 mb-6">Automated weekly reports highlight bottlenecks before they impact your bottom line.</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          Burnout Risk Detection
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          Profitability Analysis
        </div>
      </div>
    </div>
  );
};

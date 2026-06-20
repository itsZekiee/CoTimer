export const FocusVelocity = () => {
  return (
    <div className="p-8 border rounded-lg bg-white shadow-sm">
      <h3 className="text-2xl font-bold mb-4">Focus Velocity Index (FVI)</h3>
      <p className="text-slate-600">Our FVI algorithm correlates deep work intervals with output quality.</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <span className="block text-xs uppercase text-slate-400 font-bold">Accuracy</span>
          <span className="text-2xl font-bold text-teal-700">99.4%</span>
        </div>
        <div>
          <span className="block text-xs uppercase text-slate-400 font-bold">Data</span>
          <span className="text-2xl font-bold text-teal-700">Real-time</span>
        </div>
      </div>
    </div>
  );
};

const FocusVelocity = () => {
  return (
    <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">Focus Velocity Index (FVI)</h3>
      <p className="text-gray-600 text-sm">
        Our FVI algorithm correlates deep work intervals with output quality to produce a single source of truth for team momentum.
      </p>
    </div>
  );
};

export default FocusVelocity;

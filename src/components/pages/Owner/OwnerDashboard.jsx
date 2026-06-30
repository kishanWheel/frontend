function OwnerDashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Owner Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome, {user.name}</p>
      </div>
    </div>
  );
}

export default OwnerDashboard;

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="summary-card">
          <h3>Monthly Rent Split</h3>
          <div className="amount">€0</div>
        </div>
        <div className="summary-card">
          <h3>Utilities This Month</h3>
          <div className="amount">€0</div>
        </div>
        <div className="summary-card">
          <h3>Groceries This Month</h3>
          <div className="amount">€0</div>
        </div>
        <div className="summary-card">
          <h3>Furniture Investment</h3>
          <div className="amount">€0</div>
        </div>
      </div>

      {/* Monthly Spending Trends */}
      <div className="card">
        <h2 className="text-2xl font-bold text-primary-500 mb-5">📈 Monthly Spending Trends</h2>
        <div className="h-80 flex items-center justify-center bg-slate-50 rounded-lg">
          <p className="text-slate-500">Chart will be implemented here</p>
        </div>
      </div>

      {/* Current Balance */}
      <div className="card">
        <h2 className="text-2xl font-bold text-primary-500 mb-5">💰 Current Balance</h2>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
          <div className="result-item">
            <span className="result-label">Personal expenses balance:</span>
            <span className="result-value">€0</span>
          </div>
          <div className="result-item">
            <span className="result-label">Joint account expenses:</span>
            <span className="result-value">€0 this month</span>
          </div>
          <div className="result-item">
            <span className="result-label">Next settlement due:</span>
            <span className="result-value">Not scheduled</span>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="card">
        <h2 className="text-2xl font-bold text-primary-500 mb-5">📅 Upcoming Events</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-center p-8 bg-slate-50 rounded-lg">
            <div className="text-center text-slate-500">
              <div className="text-4xl mb-2">📅</div>
              <div className="font-medium">No upcoming events</div>
              <div className="text-sm">Events will appear here when added in the Calendar tab</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview

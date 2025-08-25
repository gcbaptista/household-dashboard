const Groceries = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-primary-500 mb-5">🛒 Groceries Management</h2>
        <p className="text-slate-600">Grocery expense tracking component will be implemented here with:</p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-slate-600">
          <li>Store-by-store expense tracking</li>
          <li>Multiple payment sources (joint account, individual payments)</li>
          <li>Personal balance calculations</li>
          <li>Monthly summaries and trends</li>
        </ul>
      </div>
    </div>
  )
}

export default Groceries

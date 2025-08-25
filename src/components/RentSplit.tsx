import { useState } from 'react'
import { Calculator } from 'lucide-react'

const RentSplit = () => {
  const [rentAmount, setRentAmount] = useState(0)
  const [salaryA, setSalaryA] = useState(0)
  const [salaryB, setSalaryB] = useState(0)
  const [splitMethod, setSplitMethod] = useState<'proportional' | 'equal' | 'custom'>('proportional')

  const calculateRent = () => {
    let shareA: number, shareB: number

    if (splitMethod === 'equal') {
      shareA = shareB = rentAmount / 2
    } else if (splitMethod === 'proportional') {
      const totalSalary = salaryA + salaryB
      shareA = (salaryA / totalSalary) * rentAmount
      shareB = (salaryB / totalSalary) * rentAmount
    } else {
      // Custom logic would go here
      shareA = shareB = rentAmount / 2
    }

    const percentA = ((shareA / rentAmount) * 100).toFixed(1)
    const percentB = ((shareB / rentAmount) * 100).toFixed(1)

    return { shareA, shareB, percentA, percentB }
  }

  const result = calculateRent()

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-primary-500 mb-5 flex items-center gap-2">
          <Calculator size={24} />
          Rent Split Calculator
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          <div className="form-group">
            <label>Monthly Rent Amount</label>
            <input
              type="number"
              value={rentAmount}
              onChange={(e) => setRentAmount(Number(e.target.value))}
              placeholder="1200"
            />
          </div>
          <div className="form-group">
            <label>Gonçalo's Monthly Income</label>
            <input
              type="number"
              value={salaryA}
              onChange={(e) => setSalaryA(Number(e.target.value))}
              placeholder="2500"
            />
          </div>
          <div className="form-group">
            <label>Anita's Monthly Income</label>
            <input
              type="number"
              value={salaryB}
              onChange={(e) => setSalaryB(Number(e.target.value))}
              placeholder="2000"
            />
          </div>
          <div className="form-group">
            <label>Split Method</label>
            <select
              value={splitMethod}
              onChange={(e) => setSplitMethod(e.target.value as 'proportional' | 'equal' | 'custom')}
            >
              <option value="proportional">Proportional to Income</option>
              <option value="equal">Equal Split</option>
              <option value="custom">Custom Ratio</option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
          <div className="result-item">
            <span className="result-label">Gonçalo's Contribution ({result.percentA}%):</span>
            <span className="result-value">€{Math.round(result.shareA)}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Anita's Contribution ({result.percentB}%):</span>
            <span className="result-value">€{Math.round(result.shareB)}</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-primary-500 mb-5">ℹ️ About Rent Splitting</h2>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
          <div className="result-item">
            <span className="result-label">Purpose:</span>
            <span className="result-value">Calculate fair rent contributions</span>
          </div>
          <div className="result-item">
            <span className="result-label">Proportional Method:</span>
            <span className="result-value">Based on income ratio</span>
          </div>
          <div className="result-item">
            <span className="result-label">Equal Method:</span>
            <span className="result-value">50/50 split regardless of income</span>
          </div>
          <div className="result-item">
            <span className="result-label">Utilities:</span>
            <span className="result-value">Handled separately in Utilities tab</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentSplit

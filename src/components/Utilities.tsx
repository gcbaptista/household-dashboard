import { useState, useEffect } from 'react'
import { Zap, Save, Edit, Trash2 } from 'lucide-react'
import { useUtilities } from '../hooks/useSupabaseData'
import type { UtilityData } from '../types'

const Utilities = () => {
  const { utilities, loading, error, addUtility, updateUtility, deleteUtility } = useUtilities()
  const [formData, setFormData] = useState({
    month: new Date().toISOString().slice(0, 7), // YYYY-MM format
    electricity: 0,
    gas: 0,
    water: 0,
    bundle: 0,
    other: 0,
    splitMethod: 'equal' as 'equal' | 'proportional' | 'custom',
    customA: 50,
    customB: 50,
  })
  const [salaryInputs, setSalaryInputs] = useState({
    salaryA: 0,
    salaryB: 0,
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [message, setMessage] = useState('')

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? value : Number(value)
    }))
  }

  const handleCustomRatioChange = (customA: number) => {
    setFormData(prev => ({
      ...prev,
      customA,
      customB: 100 - customA
    }))
  }

  const calculateSplit = (total: number, method: string) => {
    let shareA: number, shareB: number

    if (method === 'equal') {
      shareA = shareB = total / 2
    } else if (method === 'proportional') {
      const totalSalary = salaryInputs.salaryA + salaryInputs.salaryB
      shareA = (salaryInputs.salaryA / totalSalary) * total
      shareB = (salaryInputs.salaryB / totalSalary) * total
    } else {
      shareA = total * (formData.customA / 100)
      shareB = total * (formData.customB / 100)
    }

    return { shareA, shareB }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const utilityData = {
      month: formData.month,
      electricity: formData.electricity,
      gas: formData.gas,
      water: formData.water,
      bundle: formData.bundle,
      other: formData.other,
      split_method: formData.splitMethod,
      custom_a: formData.customA,
      custom_b: formData.customB,
    }

    try {
      if (editingId) {
        const { error } = await updateUtility(editingId, utilityData)
        if (error) throw new Error(error)
        setMessage('Utilities updated successfully!')
        setEditingId(null)
      } else {
        const { error } = await addUtility(utilityData)
        if (error) throw new Error(error)
        setMessage('Utilities added successfully!')
      }

      // Reset form
      setFormData({
        month: new Date().toISOString().slice(0, 7),
        electricity: 0,
        gas: 0,
        water: 0,
        bundle: 0,
        other: 0,
        splitMethod: 'equal',
        customA: 50,
        customB: 50,
      })
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  const handleEdit = (utility: UtilityData) => {
    setFormData({
      month: utility.month,
      electricity: utility.electricity,
      gas: utility.gas,
      water: utility.water,
      bundle: utility.bundle,
      other: utility.other,
      splitMethod: utility.split_method || 'equal',
      customA: utility.custom_a || 50,
      customB: utility.custom_b || 50,
    })
    setEditingId(utility.id!)
    setMessage('Editing utilities for ' + new Date(utility.month + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' }))
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this utility record?')) {
      const { error } = await deleteUtility(id)
      if (error) {
        setMessage(error)
      } else {
        setMessage('Utility record deleted successfully!')
      }
    }
  }

  const total = formData.electricity + formData.gas + formData.water + formData.bundle + formData.other
  const { shareA, shareB } = calculateSplit(total, formData.splitMethod)
  const percentA = total > 0 ? ((shareA / total) * 100).toFixed(1) : 0
  const percentB = total > 0 ? ((shareB / total) * 100).toFixed(1) : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-primary-500 mb-5 flex items-center gap-2">
          <Zap size={24} />
          Utilities Tracking
        </h2>

        {message && (
          <div className={`p-4 rounded-lg mb-4 ${
            message.includes('error') || message.includes('Error')
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="form-group">
              <label>Month</label>
              <input
                type="month"
                value={formData.month}
                onChange={(e) => handleInputChange('month', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Electricity (Variable)</label>
              <input
                type="number"
                step="0.01"
                value={formData.electricity}
                onChange={(e) => handleInputChange('electricity', e.target.value)}
                placeholder="60.00"
              />
            </div>
            <div className="form-group">
              <label>Natural Gas (Variable)</label>
              <input
                type="number"
                step="0.01"
                value={formData.gas}
                onChange={(e) => handleInputChange('gas', e.target.value)}
                placeholder="40.00"
              />
            </div>
            <div className="form-group">
              <label>Water (Variable)</label>
              <input
                type="number"
                step="0.01"
                value={formData.water}
                onChange={(e) => handleInputChange('water', e.target.value)}
                placeholder="25.00"
              />
            </div>
            <div className="form-group">
              <label>Internet + TV + Mobile Bundle (Fixed)</label>
              <input
                type="number"
                step="0.01"
                value={formData.bundle}
                onChange={(e) => handleInputChange('bundle', e.target.value)}
                placeholder="75.00"
              />
            </div>
            <div className="form-group">
              <label>Other Utilities</label>
              <input
                type="number"
                step="0.01"
                value={formData.other}
                onChange={(e) => handleInputChange('other', e.target.value)}
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Split Method</label>
            <select
              value={formData.splitMethod}
              onChange={(e) => handleInputChange('splitMethod', e.target.value)}
            >
              <option value="equal">Equal Split (50/50)</option>
              <option value="proportional">Proportional to Income</option>
              <option value="custom">Custom Ratio</option>
            </select>
          </div>

          {formData.splitMethod === 'proportional' && (
            <div className="card bg-slate-50">
              <h3 className="font-semibold mb-4">💰 Monthly Salaries</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label>Gonçalo's Salary</label>
                  <input
                    type="number"
                    value={salaryInputs.salaryA}
                    onChange={(e) => setSalaryInputs(prev => ({ ...prev, salaryA: Number(e.target.value) }))}
                    placeholder="2500"
                  />
                </div>
                <div className="form-group">
                  <label>Anita's Salary</label>
                  <input
                    type="number"
                    value={salaryInputs.salaryB}
                    onChange={(e) => setSalaryInputs(prev => ({ ...prev, salaryB: Number(e.target.value) }))}
                    placeholder="2000"
                  />
                </div>
              </div>
            </div>
          )}

          {formData.splitMethod === 'custom' && (
            <div className="card bg-slate-50">
              <h3 className="font-semibold mb-4">⚖️ Custom Split Ratio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label>Gonçalo's Percentage</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.customA}
                    onChange={(e) => handleCustomRatioChange(Number(e.target.value))}
                    placeholder="60"
                  />
                </div>
                <div className="form-group">
                  <label>Anita's Percentage</label>
                  <input
                    type="number"
                    value={formData.customB}
                    readOnly
                    className="bg-gray-100"
                  />
                </div>
              </div>
            </div>
          )}

          <button type="submit" className="btn">
            <Save size={20} />
            {editingId ? 'Update Utilities' : 'Save Monthly Utilities'}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null)
                setFormData({
                  month: new Date().toISOString().slice(0, 7),
                  electricity: 0,
                  gas: 0,
                  water: 0,
                  bundle: 0,
                  other: 0,
                  splitMethod: 'equal',
                  customA: 50,
                  customB: 50,
                })
                setMessage('')
              }}
              className="btn btn-secondary ml-4"
            >
              Cancel Edit
            </button>
          )}
        </form>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mt-6">
          <div className="result-item">
            <span className="result-label">Total This Month:</span>
            <span className="result-value">€{total.toFixed(2)}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Gonçalo's Share:</span>
            <span className="result-value">€{shareA.toFixed(2)} ({percentA}%)</span>
          </div>
          <div className="result-item">
            <span className="result-label">Anita's Share:</span>
            <span className="result-value">€{shareB.toFixed(2)} ({percentB}%)</span>
          </div>
        </div>
      </div>

      {utilities.length > 0 && (
        <div className="card">
          <h2 className="text-2xl font-bold text-primary-500 mb-5">📊 Utilities History</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-4 text-left font-semibold">Month</th>
                  <th className="p-4 text-left font-semibold">Electricity</th>
                  <th className="p-4 text-left font-semibold">Gas</th>
                  <th className="p-4 text-left font-semibold">Water</th>
                  <th className="p-4 text-left font-semibold">Bundle</th>
                  <th className="p-4 text-left font-semibold">Other</th>
                  <th className="p-4 text-left font-semibold">Total</th>
                  <th className="p-4 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {utilities.map((utility) => {
                  const utilityTotal = utility.electricity + utility.gas + utility.water + utility.bundle + utility.other
                  const monthName = new Date(utility.month + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                  const splitIcon = utility.split_method === 'equal' ? '⚖️' :
                                  utility.split_method === 'proportional' ? '📊' : '⚙️'

                  return (
                    <tr key={utility.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="p-4">
                        {monthName} {splitIcon}
                      </td>
                      <td className="p-4">€{utility.electricity.toFixed(2)}</td>
                      <td className="p-4">€{utility.gas.toFixed(2)}</td>
                      <td className="p-4">€{utility.water.toFixed(2)}</td>
                      <td className="p-4">€{utility.bundle.toFixed(2)}</td>
                      <td className="p-4">€{utility.other.toFixed(2)}</td>
                      <td className="p-4 font-bold">€{utilityTotal.toFixed(2)}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(utility)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(utility.id!)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {error && (
        <div className="card bg-red-50 border-red-200">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}
    </div>
  )
}

export default Utilities

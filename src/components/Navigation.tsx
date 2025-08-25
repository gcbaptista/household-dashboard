import { BarChart3, Home, Zap, Armchair, ShoppingCart, Calendar } from 'lucide-react'

type TabType = 'overview' | 'rent' | 'utilities' | 'furniture' | 'groceries' | 'calendar'

interface NavigationProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: BarChart3 },
    { id: 'rent' as TabType, label: 'Rent Split', icon: Home },
    { id: 'utilities' as TabType, label: 'Utilities', icon: Zap },
    { id: 'furniture' as TabType, label: 'Furniture', icon: Armchair },
    { id: 'groceries' as TabType, label: 'Groceries', icon: ShoppingCart },
    { id: 'calendar' as TabType, label: 'Calendar', icon: Calendar },
  ]

  return (
    <nav className="flex justify-center mb-8 bg-white rounded-2xl p-2 shadow-lg overflow-x-auto">
      <div className="flex gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation

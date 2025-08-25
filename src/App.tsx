import { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import Auth from './components/Auth'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Overview from './components/Overview'
import RentSplit from './components/RentSplit'
import Utilities from './components/Utilities'
import Furniture from './components/Furniture'
import Groceries from './components/Groceries'
import Calendar from './components/Calendar'

type TabType = 'overview' | 'rent' | 'utilities' | 'furniture' | 'groceries' | 'calendar'

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!user) {
    return <Auth />
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />
      case 'rent':
        return <RentSplit />
      case 'utilities':
        return <Utilities />
      case 'furniture':
        return <Furniture />
      case 'groceries':
        return <Groceries />
      case 'calendar':
        return <Calendar />
      default:
        return <Overview />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-5 py-5 max-w-6xl">
        <Header />
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="mt-8">
          {renderActiveTab()}
        </main>
      </div>
    </div>
  )
}

export default App

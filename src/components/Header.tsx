import { Home, LogOut, User } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const Header = () => {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="text-center mb-10 p-8 bg-gradient-primary text-white rounded-2xl shadow-xl relative">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Home size={40} />
        <h1 className="text-4xl font-bold">Household Dashboard</h1>
      </div>
      <p className="text-xl opacity-90">Managing our home together</p>

      {user && (
        <div className="absolute top-4 right-4 flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm opacity-90">
            <User size={16} />
            <span>{user.email}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm"
            title="Sign out"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      )}
    </header>
  )
}

export default Header

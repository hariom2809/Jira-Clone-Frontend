import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  
  return (
    <>
      <LoginPage />
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </>
  )
}

export default App
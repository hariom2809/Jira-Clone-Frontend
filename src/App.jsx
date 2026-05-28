import { useState } from 'react'
import ProjectDashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectDashboard />
    </>
  )
}

export default App

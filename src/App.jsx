import { useState } from 'react'
import ProjectDashboard from './pages/ProjectDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectDashboard />
    </>
  )
}

export default App

import './App.css'
import Card from './components/card'
import { Header } from './components/header'

function App() {

  return (
    <>
      <Header/>
      <Card/>
      <h1 className='bg-gray-300'>Vite + React</h1>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App

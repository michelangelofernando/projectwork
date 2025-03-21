import './App.css';
import { Header } from './components/header';
import Card from './components/card';
import { Saluto } from './components/Saluto';
import './styles/style.css';
function App() {
  
  return (
    <>
      <Header/>
      <Saluto nome="Michelangelo"/>
      
      <Card/>
      

    </>
  )
}

export default App

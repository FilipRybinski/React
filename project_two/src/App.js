import './App.css';
import Info from './Components/Info'
import Footer from './Components/Footer'
import Interests from './Components/Interests'
import About from './Components/About'
function App() {
  return (
    <div className='container'>
      <Info />
      <About />
      <Interests />
     <Footer />    
    </div>
  )
}

export default App;

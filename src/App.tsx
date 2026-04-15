import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Episodes from './components/Episodes'
import Hosts from './components/Hosts'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Episodes />
        <Hosts />
      </main>
      <Footer />
    </div>
  )
}

export default App

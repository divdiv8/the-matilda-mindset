import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Episodes from './components/Episodes/Episodes'
import Hosts from './components/Hosts/Hosts'
import Footer from './components/Footer/Footer'
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

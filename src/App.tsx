import Navbar from './components/Navbar/Navbar'
import Admin from './components/Admin/Admin'
import Hero from './components/Hero/Hero'
import Episodes from './components/Episodes/Episodes'
import EpisodePage from './components/EpisodePage/EpisodePage'
import {useState, useEffect} from 'react'
import { type Episode, type HomePageProps } from './types/types'
import Hosts from './components/Hosts/Hosts'
import Footer from './components/Footer/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function HomePage({ episodes, loading }: HomePageProps){
  return(
      <main>
        <Hero />
        <Episodes episodes={episodes} loading={loading}/>
        <Hosts />
      </main>
  )
}
function App() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading]= useState<boolean>(true)


  useEffect(() => {
    async function fetchEpisodes() {
      const res = await fetch("https://s3-tmm-episodes.s3.amazonaws.com/episodes.json")
      const data: Episode[] = await res.json()
      setEpisodes(data.filter(ep => ep.status === 'published'))
      setLoading(false)
    }
    fetchEpisodes()
  }, [])
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage episodes={episodes} loading={loading} />} />
        <Route path="/episodes/:id" element={<EpisodePage  episodes={episodes} loading={loading}/>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App

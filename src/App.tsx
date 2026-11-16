import { Navbar } from "./components/layouts/Navbar"
import { About } from "./components/sections/About"
import { Hero } from "./components/sections/Hero"
import { Skills } from "./components/sections/Skills"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
    </div>
  )
}

export default App

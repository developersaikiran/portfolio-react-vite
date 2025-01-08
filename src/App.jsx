import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { Services } from './Components/Services/Services'
import { Mywork } from './Components/Mywork/Mywork'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'
import './assets/stylesheets/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{justifyItems: 'center', width: '100%', height: '100%'}}>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Mywork />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App

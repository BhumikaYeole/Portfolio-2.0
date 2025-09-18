import { useState } from 'react'
import './App.css'
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';

function App() {

  const [theme, setTheme] = useState(true);
  

  return (
    <>
     <Layout>
      <div className= " bg-[var(--bg-gradient)] text-[var(--text-color)] tracking-widest font-extrabold "> 
      <Background theme={theme}/> 
      <Navbar theme={theme} setTheme ={setTheme}/>
      <Main theme={theme}/>
      <About theme={theme}/>
      <Skills theme={theme}/>
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer theme= {theme}/>
      </div>
     </Layout>
     <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}

export default App

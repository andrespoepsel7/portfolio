// imports 
import { useEffect, lazy, Suspense } from 'react';
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Router
import { Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import LandingPage from './components/layouts/LandingPage'
import Loader from './components/reusable/Loader';

// Lazy loads
const About = lazy(()=>import("./components/layouts/About"))
const Skills = lazy(()=>import("./components/layouts/Skills"))
const Projects = lazy(()=>import("./components/layouts/Projects"))
const Hobbies = lazy(()=>import("./components/layouts/Hobbies"))

function App() {

  useEffect(() => {
    AOS.init({
      duration:1500,
      easing:'ease-in-out-back'
    })
  }, []);

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route element={<Main/>}>
          {/* Rutas */}
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/hobbies' element={<Hobbies/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

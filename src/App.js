// imports 
import { useEffect } from 'react';
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Router
import { Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import LandingPage from './components/layouts/LandingPage'

function App() {

  useEffect(() => {
    AOS.init({
      duration:1500,
      easing:'ease-in-out-back'
    })
  }, []);

  return (
    <Routes>
      <Route element={<Main/>}>
        {/* Rutas */}
        <Route path='/' element={<LandingPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;

import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
  About,
  Skills,
  Career,
  Contact,
  Home,
} from "./pages"
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path ="/" element={ <Home /> } />
        <Route exact path ="/about" element={ <About /> } />
        <Route exact path ="/skills" element={ <Skills /> } />
        <Route exact path ="/career" element={ <Career /> } />
        <Route exact path ="/contact" element={ <Contact /> } />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

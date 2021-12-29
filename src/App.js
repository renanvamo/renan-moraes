import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  About,
  Skills,
  Career,
  Contact,
  Home,
} from "./pages"

function App() {
  return (
    <Routes>
      <Route exact path ="/" element={ <Home /> } />
      <Route exact path ="/about" element={ <About /> } />
      <Route exact path ="/skills" element={ <Skills /> } />
      <Route exact path ="/career" element={ <Career /> } />
      <Route exact path ="/contact" element={ <Contact /> } />
    </Routes>
  );
}

export default App;

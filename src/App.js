import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  About,
  Skills,
  Career,
  Contact,
} from "./pages"

function App() {
  return (
    <Routes>
      <Route exact path ="/" element={ <About /> } />
      <Route exact path ="/skills" element={ <Skills /> } />
      <Route exact path ="/career" element={ <Career /> } />
      <Route exact path ="/contact" element={ <Contact /> } />
    </Routes>
  );
}

export default App;

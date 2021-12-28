import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  Home
} from "./pages"

function App() {
  return (
    <Routes>
      <Route exact path ="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;

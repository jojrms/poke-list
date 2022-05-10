import Home from "./components/Home";

import './components/CSS/animations.css'

import './components/CSS/homeResponsive.css';
import './components/CSS/home.css';
import './components/CSS/viewer.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Viewer from './components/Viewer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="//pokemons/0" element={<Home/>} />
            <Route
              path="/pokemons/:id"
              element={<Viewer/>}
            />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

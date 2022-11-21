import Home from "./components/Home";
import './components/General.css'

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
            <Route path="/pokemons/0" element={<Home/>} />
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

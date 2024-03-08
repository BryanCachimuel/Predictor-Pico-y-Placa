import './App.css';
import ListarVerificado from './predictor/ListarVerificado';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import VerificarPlacas from './predictor/VerificarPlacas';
import Navegar from './predictor/Navegar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListarVerificado/>}/>
          <Route path='/crear' element={<VerificarPlacas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

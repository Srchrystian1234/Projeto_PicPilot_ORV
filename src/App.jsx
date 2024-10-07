import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import Cadastro from './pages/Cadastro';
import Container from './components/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
 

  return (
    <>
    <BrowserRouter>
          <Routes>
                 <Route path="/" element={<Container/>} />
                 <Route path='/cadastro' element={<Cadastro/>}/>
          </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

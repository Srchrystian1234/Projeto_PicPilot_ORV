import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import Cadastro from './pages/Cadastro';
import Container from './components/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EsqueceSenha from './pages/EsqueceSenha';
import Dashbord from './pages/Dashbord';
import ImportarImagen from './pages/ImportarImagen';
function App() {
 
  return (
    <>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Container/>} />
                  <Route path='/cadastro' element={<Cadastro/>}/>
                  <Route path='/esquecesenha' element={<EsqueceSenha/>}/>
                  <Route path='/dashbord' element={<Dashbord/>}/>
                  <Route path='/imagem' element={<ImportarImagen/>}/>
            </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App

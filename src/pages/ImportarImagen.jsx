import '../css/ImportarImagen_css/ImportarImagem.css'
import '../css/Dashbord.css'
import MenuLateral from '../components/MenuLateral/MenuLateral'
export default function ImportarImagen() {
  return (
    <div className='cor-de-fundo'>
        <MenuLateral/>
        <div className='orv-importar-imagem'>
              <div className='orv-fundo-trans'>
                <p><input type="file" /></p>
                <button >ola</button>
              </div>
        </div>
    </div>
  )
}

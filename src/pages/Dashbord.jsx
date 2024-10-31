import '../css/Dashbord.css'
import Picpilot from '../img/picpilot.png'

export default function Dashbord() {
  return (
    <div className='cor-de-fundo'>
          <div className='menu-lateral'>
            <div className='menu-lateral-sub'>
                <div className='picpilot-orv'>PicPilot
                  <div className='img-orv'><img src={Picpilot}/></div> 
                </div>
                <i className="bi bi-x-lg"></i>
                
              </div>
              <div className='menu-opcoes'>
                  <button className='opcoes'> <i className="icon bi bi-house-fill"></i> <p className='paragrafo'>Pagina Inicial</p></button>

                  <button className='opcoes'><i className="icon bi bi-image-fill"></i> <p className='paragrafo'>Importar Imagens</p></button>

                  <button className='opcoes'><i className="icon bi bi-exclamation-triangle-fill"></i> <p className='paragrafo'>Avisos</p></button>

                  <button className='opcoes'><i className=" icon bi bi-hammer"></i> <p className='paragrafo'>Obras</p></button>

                  <button className='opcoes'> <i className=" icon bi bi-bank2"></i> <p className='paragrafo'>Financeiro</p></button>

                  <button className='opcoes'><i className=" icon bi bi-calendar-check-fill"></i> <p className='paragrafo'>Lista de Tarefas</p></button>

                  <button className='opcoes'><i className="icon bi bi-calendar-event-fill"></i> <p className='paragrafo'>Calendario</p></button>

                  <button className='opcoes'><i className="icon bi bi-chat-dots-fill"></i> <p className='paragrafo'>Chat</p></button>

                  <button className='opcoes'><i className="icon bi bi-headset"></i> <p className='paragrafo'>Chamados</p></button>
                  
              </div>
              <button className='opcoes-sair'><i className="icon-sair bi bi-box-arrow-in-left"></i> <p className='paragrafo-sair'>Sair</p></button>
          </div>
    </div>
  )
}

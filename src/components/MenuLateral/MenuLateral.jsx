import { useState } from 'react'
import Picpilot from '../../img/ORV-Horizontal.png'
import '../../css/Dashbord.css'
import '../../css/MenuLateal_css/MenuLateral.css'
import Logopequena from '../../img/ORV-Horizontal.png'


export default function MenuLateral() {
  
  //componente menu lateral 
  //menun lateal assim que passar o mouse
  const [isExpanded,setisExpanded] = useState(false);

   // Expande o menu ao passar o mouse
   const handleMouseEnter = ()=>{
    setisExpanded(true);//caso mouse esteja em cima da barra de menu , ele aumenta e fica vdd
   };
   // Recolhe o menu ao retirar o mouse
   const handleMouseleave = ()=>{
    setisExpanded(false);
   };

  return (
    
    <div className={`menu-lateral ${isExpanded? 'expanded':''}`}//fazendo codicao de se expandi ou nao
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseleave}> 

        <div className='menu-lateral-sub'>

              {isExpanded? <div className='picpilot-orv'>PicPilot
                  <div className='img-orv'><img src={Picpilot}/></div> 
                </div>:
                  <div className='img-logo-pequena'><img src={Logopequena}/></div>
              }
        </div> 

        <div className='menu-opcoes'>
                  <a className='opcoes' href='/dashbord'><i className="icon bi bi-house-fill"></i><p className='paragrafo'>Pagina Inicial</p></a>

                  <a className='opcoes' href='/imagem'><i className="icon bi bi-image-fill"></i><p className='paragrafo'>Importar Imagens</p></a>

                  <button className='opcoes'><i className="icon bi bi-exclamation-triangle-fill"></i><p className='paragrafo'>Avisos</p></button>

                  <button className='opcoes'><i className="icon bi bi-hammer"></i><p className='paragrafo'>Obras</p></button>

                  <button className='opcoes'> <i className="icon bi bi-bank2"></i><p className='paragrafo'>Financeiro</p></button>

                  <button className='opcoes'><i className="icon bi bi-calendar-check-fill"></i><p className='paragrafo'>Lista de Tarefas</p></button>

                  <button className='opcoes'><i className="icon bi bi-calendar-event-fill"></i><p className='paragrafo'>Calendário</p></button>

                  <button className='opcoes'><i className="icon bi bi-chat-dots-fill"></i><p className='paragrafo'>Chat</p></button>

                  <button className='opcoes'><i className="icon bi bi-headset"></i><p className='paragrafo'>Chamados</p></button> 
        </div>
        <a className='opcoes-sair' href='/'><i className="icon-sair bi bi-box-arrow-in-left"></i><p className='paragrafo-sair'>Sair</p></a>
    </div>
  )
}


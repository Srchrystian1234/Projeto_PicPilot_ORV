import '../css/Dashbord.css'
import Picpilot from '../img/picpilot.png'

export default function Dashbord() {
  return (
    <div className='cor-de-fundo'>
          <div className='menu-lateral'>
            <div className='picpilot-orv'>PicPilot
            <div className='img-orv'><img src={Picpilot}/></div> 
            </div>
            
            <i className="bi bi-x-lg"></i>
          </div>
    </div>
  )
}

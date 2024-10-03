import Logo from '../img/ORV-H1.svg'
import '../app.css'
import '../css/Logo.css'
export default function logo() {
  return (
    <div className='container-caixa-login'>
        <div className='Orv-logo'>
            <img src={Logo} /> 
            <section className='borda-gradient'></section>   
        </div>
        
  
    </div>
  )
}

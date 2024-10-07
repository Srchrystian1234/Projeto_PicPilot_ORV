import Logo from '../img/ORV-H1.svg'
import '../app.css'
import '../css/Logo.css'

export default function logo() {
  return (
    <div className='classeTest'> {/*aqui é div pai do container*/ }
            <img src={Logo} />  
            <section className='borda-gradient'></section> 
    </div>
  )
}

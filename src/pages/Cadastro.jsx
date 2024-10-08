import '../css/Cadastro.css'
import '../css/Logo.css'
import Logo from "../components/Logo"
export default function Cadastro() {
  return (
    
        <div className="container-cadastrar">
            <Logo/>
            <div className="icon">
                <i className="bi bi-person-circle"></i>   
            </div>

            <div className="inputsCadastro">

                <div className="inputIcon">
                    <i className='bi bi-person-fill'></i>
                    <input className='input-nome1' type="text" name="nome1" id="nome1" placeholder='Nome completo' />
                 </div> 

                 <div className="inputIcon">
                    <i className='bi bi-envelope-fill'></i>
                    <input className='input-email' type="email" name="email" id="email" placeholder='Email' />
                  </div>   
                <div className="inputIcon">
                    <i className='bi bi-lock-fill'></i>
                    <input className='input-password' type="text" name="senha" id="senha1" placeholder='Senha' />
                </div>   
                <div className="inputIcon">
                    <i className='bi bi-lock-fill'></i>
                    <input className='input-password-repeat' type="text" name="senhaRepete" id="senhaRepete" placeholder='Repete senha' />
                </div>   

            </div>
          <div className='button'>
                <button type="button" className="buttons">Cadastrar</button>
          </div>
          <div className="cadastro">
            <p>Ja tenho conta? <a href="/">Login</a></p>
        </div>     
      </div>
    
  )
}

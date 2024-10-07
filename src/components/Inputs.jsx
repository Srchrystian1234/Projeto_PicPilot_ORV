import '../css/Logo.css'
import '../css/Inputs.css'
export default function Inputs() {
  return (
    <div>
        <div className='input-login'>
            <label className='labelNome' htmlFor="inputNome">Nome</label>
            <input className='input-nome' id='inputNome' type="text"/>
            <label className='labelSenha' htmlFor="inputSenha">Senha</label>
            <input className='input-senha'id='inputSenha' type="text"/>
            <div className='link'>
                <a className='link-esqueci' href="#">Esquece minha senha?</a>
            </div>
        </div>
        <div className='button'>
            <button type="button" className="buttons">Entrar</button>
        </div>
        <div className="cadastro">
            <p>Não tem sua conta? <a href="/cadastro">Inscreva-se</a></p>
        </div>
  </div>
  )
}

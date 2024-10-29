import '../css/EsqueceSenha.css'
import Logo from '../components/Logo'
export default function EsqueceSenha() {
  return (
    <div className='container-caixa-esquece'>
        <Logo/>
        <div className="centralizar-redefinir">
            <div className="VoltarLogin">
                <a className='text-muted' href="/"><i className='bi bi-arrow-left'></i>Volta</a>
            </div>
            <div className="redefiniTexto">
                <h2>Redefinição de <br/> senha!</h2>
            </div>
            <div className="redefiniTextoPequeno">
                <p>Informe um email e enviaremos um link para recuperação da sua senha.</p>
            </div>
            <div className='inputEmailSenha'>
                <label className='labelNome' htmlFor="inputEmailSenha">Email</label>
                <input className='input-nome' id='inputEmailSenha' type="email"/>
            </div>
            <div className="button-esquece">
                <button type="button" className="buttons-esquece">Enviar link de recuperação</button>
            </div>
        </div>
    </div>
  )
}

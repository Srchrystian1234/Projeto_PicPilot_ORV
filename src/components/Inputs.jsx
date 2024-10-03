import '../css/Logo.css'
import '../css/Inputs.css'
export default function Inputs() {
  return (
        <div className='input-login'>
            <label className='labelNome' htmlFor="inputNome">Nome</label>
            <input className='input-nome' id='inputNome' type="text"/>
            <label className='labelSenha' htmlFor="inputSenha">Senha</label>
            <input className='input-senha'id='inputSenha' type="text"/>

        </div>
       
  )
}

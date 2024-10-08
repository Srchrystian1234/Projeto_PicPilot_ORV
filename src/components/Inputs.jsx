import '../css/Logo.css'
import '../css/Inputs.css'
import { useState,useEffect } from 'react'
export default function Inputs() {

    const [form,setForm] = useState({
        nome:'',
        senha:'',
    })
    const hanleChange = (event)=>{
        const auxForm = {...form};
        auxForm[event.target.name] = event.target.value;
        setForm(auxForm);
    }

    useEffect(()=>{
        console.log(form)
    },[form])

    const enviarDados = (e)=>{
        e.preventDefault();
        let nome = form.nome;
        let senha = form.senha
        console.log(nome)
        console.log(senha)

    }
  return (
    <div >
        
        <form onSubmit={enviarDados} method='get'>
        <div className='input-login'>
            <label className='labelNome' htmlFor="inputNome">Nome</label>
            <input  className='input-nome'onChange={hanleChange} id='inputNome'  type="text" name='nome'/>
            <label className='labelSenha' htmlFor="inputSenha">Senha</label>
            <input className='input-senha'id='inputSenha' type="password" onChange={hanleChange} name='senha'/>
            <div className='link'>
                <a className='link-esqueci' href="/esquecesenha">Esquece minha senha?</a>
            </div>
        </div>
        <div className='button'>
            <button  type="submit" className="buttons">Entrar</button>
        </div>
        </form>
        <div className="cadastro">
            <p>Não tem sua conta? <a href="/cadastro">Inscreva-se</a></p>
        </div>
  </div>
  )
}

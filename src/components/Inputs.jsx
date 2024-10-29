import '../css/Logo.css'
import '../css/Inputs.css'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/Api'; //conexao com bando de dados 

export default function Inputs() {
    const navigate = useNavigate(); //responsavel por retornar a tela de login apos o cadastro 
    const inputEmail = useRef();//referenciando os resultado que esta vindo do nome
    const inputPassword = useRef(); //referenciando os resultado que esta vindo do senha
    const [status,setStatus]=useState({ //responsavel pela mensagem de sucesso e erro
        type:'',
        mensagem:''
    }); // Estado para mensagens de status
    

    
    const Logan = async ()=>{ //funcao de logar com a conexao com o banco de dados 
       
        const isValid = validacaoLogin(); //validacao para ver se o campo nao esta em branco

        if(isValid !== true){  // Se a validação falhar, interrompe
            return;
        }
        const email = inputEmail.current.value.trim();//instanciando 
        const password = inputPassword.current.value.trim();

        try{
            //chamada a API para fazer o login
            const response = await api.post('/login',{email,password});
            
            if(response.status === 200){
                // Navegando para a página desejada após login bem-sucedido
                navigate('/dashboard'); // Mude para a rota correta,caso senha a pessoa certa
            }else{
                setStatus({type:'error',mensagem:'Credencias incorretas !'}); //status de erro de credencias
            }
        }catch(error){
            setStatus({type:'error',mensagem:'erro ao fazer o login , tentar novamente !'});
            console.error('login error:', error);
            console.log(error)
        }
        
    }

    const validacaoLogin = ()=>{
 // Obtém os valores dos campos de entrada e remove espaços em branco
        const email = inputEmail.current.value.trim();
        const password = inputPassword.current.value.trim();

         // Verifica se o campo de nome está vazio

        if(!email){
            return setStatus({type:'error',mensagem:'Necessario  preencher o campo nome !'});
        }
        if(!password){
            return  setStatus({type:'error',mensagem:'Necessario  preencher o campo senha!'});
        } 
  // Retorna true se ambos os campos estão preenchidos corretamente
        return true;
    }

  return (
        <form onSubmit={(e) => e.preventDefault()} >
            <div className='input-login'>
                <label className='labelNome' htmlFor="inputNome">Email</label>
                <input  className='input-nome' name='name' id='inputNome' ref={inputEmail}  type="text"/>
                <label className='labelSenha' htmlFor="inputSenha">Senha</label>

                <input className='input-senha'id='inputSenha' type="password" ref={inputPassword} name='password' />
                <div className='link'>
                    <a className='link-esqueci' href="/esquecesenha">Esquece minha senha?</a>
                </div>
            </div>
            <div className='button'>
                <button type='button' onClick={Logan} className="buttons">Entrar</button>
            </div>

            {status.mensagem && (
                <p className={`status-message ${status.type}`}>{status.mensagem}</p>
            )}
            <div className="cadastro">
                <p>Não tem sua conta? <a href="/cadastro">Inscreva-se</a></p>
            </div>
        </form>
       
  
  )
}

/* eslint-disable no-useless-escape */
import '../css/Cadastro.css'
import '../css/Logo.css'
import Logo from "../components/Logo"
import { useState } from 'react';
export default function Cadastro() {

    const [user,setUser] = useState({ /* preenchimento do usuario e pra poder setar ele */ 
          nome:'', /*nome vazio pq ainda nao tem nada*/
          email:'', //senha mesma coisa
          senha:'',
          senhaRepete:''
      });

    const [status,setStatus] = useState({ //estado pra saber se foi preenchido ou nao o formulario
          type:'', //se deu success ou error
          mensagem:'' //mensagem de erro ou sucesso 
      });

      //recebendo os dados do formulario

      const valueInput = (e) => setUser({...user, [e.target.name]: e.target.value}); //pegando os dados do formulario pelos inputs

      //enviar os dados para o back-end

      const enviarDados = async (e)=> { //quando clicar chama a funcao 
      e.preventDefault(); //preventdefault pra nao recarregar a pagina

      //antes de fazer a requisicao pro backend
      //fazer uma condicao manual aqui , pq ainda nao fizemos conexao com banco de dados
      if(!validacao()) return; //se for diferente de vdd a validacao para o processamento ele ja nao prosegue


      const saveDataForm = true; //verificar se salvou com sucesso ou nao com sucesso 

      //caso tenha sido salvo , vamos ver as condições

      if(saveDataForm){ //caso for verdade ele vai executa essa ação
          setStatus({ //caso for uscesso ele vai mostrar mensagem de sucesso na tela , que foi passado 
              type:'success',
              mensagem:'Usuario cadastrado com sucesso'
          });
          setUser({ //colocar o nome do usuario cadastrado e senha
              name:'',
              password:''
          });
      }else{ //caso nao for salvo no banco de dados e nao passar na validação
          setStatus({
              type:'error',
              mensagem:'Erro: Usuario não cadastrado'
          });
      }


      }

      /* fazer a funcao de validacao */
      function validacao(){ //fucnao de validacao 
      //primeiro passei a  condicao pra ver se a user name é falsa , caos seja eu retorno setStatus com as mensagen de erro
      const nome = user.nome;
      const email = user.email
      const senha = user.senha;
      const senhaRepete = user.senhaRepete

      nome.trim();
      email.trim();
      senha.trim();
      senhaRepete.trim();
      

      nome.replace(/[^A-zÀ-ù\s]/gi,'');

      if(!nome){
        return setStatus({type:'error',mensagem:'Necessario  preencher o campo nome !'});
      }

      if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(nome)){
          return setStatus({type:'error',mensagem:'Nome invalido'})
      }
      if(!email){
        return setStatus({type:'error',mensagem:'Necessario  preencher o campo email !'});
      }
      
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
       return setStatus({type:'error',mensagem:'Campo email invalido !'});
      }  

      if(!senha){
          return  setStatus({type:'error',mensagem:'Necessario  preencher o campo senha!'});
      } 
      if(senha.length < 6){ 
          return setStatus({type:'error', mensagem:'informe uma senha com no minimo 6 caracteres'})
      }  
      if(senha !== senhaRepete){
        return setStatus({type:'error', mensagem:'Por favor confirme a senha corretamente'})
      }

      //caso nao esta nenhum erro e campo preenchido nos retornamos o true

          return true; //se estiver true , ele nao acessar o if !validade, passa direto
      }

  return (

        <div className="container-cadastrar">
            <Logo/>
            
            <form onSubmit={enviarDados}>
            <div className="icon">
                <i className="bi bi-person-circle"></i>   
            </div>

            <div className="inputsCadastro">

                <div className="inputIcon">
                    <i className='bi bi-person-fill'></i>
                    <input className='input-nome1' type="text" name="nome" id="nome" onChange={valueInput} placeholder='Nome completo' />
                 </div> 

                 <div className="inputIcon">
                    <i className='bi bi-envelope-fill'></i>
                    <input className='input-email' type="email" name="email" onChange={valueInput} id="email" placeholder='Email' />
                  </div>   
                <div className="inputIcon">
                    <i className='bi bi-lock-fill'></i>
                    <input className='input-password' type="password" name="senha" onChange={valueInput} id="senha1" placeholder='Senha' />
                </div>   
                <div className="inputIcon">
                    <i className='bi bi-lock-fill'></i>
                    <input className='input-password-repeat' type="password" name="senhaRepete" onChange={valueInput} id="senhaRepete" placeholder='Repete senha' />
                </div>   

            </div>
          <div className='button'>
                <button type="submit"  className="buttons">Cadastrar</button>
          </div>
          <div className="cadastro">
            <p>Ja tenho conta? <a href="/">Login</a></p>
        </div>
        { //verificando se foi sucesso ou errado , e verifica se passou pela condicao ou nao, estatos final
             status.type ===  'success' ? <p style={{height:'50px'}} className='alert alert-success text-align-center text-success fw-bold w-100' role='alert'>{status.mensagem}</p> :''
            }
            { //verificando se foi sucesso ou errado , e verifica se passou pela condicao ou nao, estatos final
             status.type ===  'error' ? <p style={{height:'50px'}} className='alert alert-danger text-align-center w-100 text-danger fw-bold' role='alert'>{status.mensagem}</p> :''
            }
        </form>      
      </div>
    
  )
}

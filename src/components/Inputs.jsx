import '../css/Logo.css'
import '../css/Inputs.css'
import { useState} from 'react'
export default function Inputs() {

   const [user,setUser] = useState({ /* preenchimento do usuario e pra poder setar ele */ 
        name:'', /*nome vazio pq ainda nao tem nada*/
        password:'', //senha mesma coisa
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
    const nome = user.name;
    const senha = user.password;

    nome.trim();
    senha.trim();

    nome.replace(/[^A-zÀ-ù\s]/gi,'');

    if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(nome)){
        return setStatus({type:'error',mensagem:'Nome invalido'})
    }
    if(!nome){
        return setStatus({type:'error',mensagem:'Necessario  preencher o campo nome !'});
    }
    if(!senha){
        return  setStatus({type:'error',mensagem:'Necessario  preencher o campo senha!'});
    } 
    if(senha.length < 6){ 
        return setStatus({type:'error', mensagem:'informe uma senha com no minimo 6 caracteres'})
    }  
   
    //caso nao esta nenhum erro e campo preenchido nos retornamos o true

        return true; //se estiver true , ele nao acessar o if !validade, passa direto
   }

  return (
    <div >
        { //verificando se foi sucesso ou errado , e verifica se passou pela condicao ou nao, estatos final
             status.type ===  'success' ? <p style={{height:'50px'}} className='alert alert-success text-align-center w-100' role='alert'>{status.mensagem}</p> :''
       }
       { //verificando se foi sucesso ou errado , e verifica se passou pela condicao ou nao, estatos final
             status.type ===  'error' ? <p style={{height:'50px'}} className='alert alert-danger text-align-center w-100' role='alert'>{status.mensagem}</p> :''
       }
      
        <form onSubmit={enviarDados} >
            <div className='input-login'>
                <label className='labelNome' htmlFor="inputNome">Nome</label>
                <input  className='input-nome' name='name'onChange={valueInput} id='inputNome'  type="text"/>
                <label className='labelSenha' htmlFor="inputSenha">Senha</label>

                <input className='input-senha'id='inputSenha' type="password" onChange={valueInput} name='password' />
                <div className='link'>
                    <a className='link-esqueci' href="/esquecesenha">Esquece minha senha?</a>
                </div>
            
            </div>
            <div className='button'>
                <button  type="submit" className="buttons">Entrar</button>
            </div>
            
            <div className="cadastro">
                <p>Não tem sua conta? <a href="/cadastro">Inscreva-se</a></p>
            </div>
        </form>
       
  </div>
  )
}

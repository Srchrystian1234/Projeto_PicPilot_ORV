
import '../css/Cadastro.css'
import '../css/Logo.css'
import Logo from "../components/Logo"
import api from '../../services/Api'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
export default function Cadastro() {
    const navigate = useNavigate(); //responsavel por retornar a tela de login apos o cadastro 

    const [status,setStatus] = useState({ //responsavel pela mensagem de sucesso e erro
        type:'',
        mensagem:''
    })
    const inputName = useRef() //referenciando os inputs pra pode pegar o valor
    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputRepeatPas = useRef()

    const [users,setUsers]= useState([]);//pra usar toda vez  que for adicionado outro usuarios

    async function getUsers() { //responsavel pela a listar dos usuarios que estao vindo do bando de dados 
        const usersFromApi = await api.get('/users')////ligacao com a rota users pra mostra com get 
        setUsers(usersFromApi.data) 
        console.log(users)
    }
    //validacao de formulario
    async function CreateUser() { //responsavel pela criacao e validacao dos usuarios 

        const isValid = validacao();  //chamando a funcao de validacao e colcoadno dentro de uma variavel 
        
        // Se a validação falhar, interrompe a execução
        if (isValid !== true) {  //verificando se passasou na execuççao ou nao 
            return; // A validação já tratou o erro
        }
    
        try{ //verifica se foi envaido ou noa para o bando de dados
        const response =  await api.post('/users',{  //pega o api.post e coloca dentro de uma const response , para verificar os status
            name:inputName.current.value, //envio dos campos input para o banco de dados 
            email: inputEmail.current.value.toLowerCase(),
            password:inputPassword.current.value
         });
    
         if (response.status === 201) { //verificado o status de erro se caso deu bom ou nao 
            console.log('Usuário criado com sucesso:', response.data);
            setStatus({ //caso for uscesso ele vai mostrar mensagem de sucesso na tela , que foi passado 
                type:'success',
                mensagem:'Usuario cadastrado com sucesso'
            });
         
            // Atualiza a lista de usuários após a criação
            await getUsers();
    
                 // Limpa os campos do formulário
                ClearFields();
    
                 navigate('/') //seta a rota da tela inicial 
            }
        }catch(error){ //caso der erro , ele mandar mensagem de erro e o tipo 
            setStatus({
                type:'error',
                mensagem:'Erro: Usuario não cadastrado'
            });
            console.error('erroo ao criar usuarios',error);
        }
    }
    /*async function deleteUsers(id) {
         await api.delete(`/users/${id}`)
        
    }*/
    // Carregar usuários ao montar o componente
    useEffect(() => {
    
        getUsers();
    }, [])
    
    //validações de usuarios 
    function validacao(){
        const nome = inputName.current.value.trim();
        const email = inputEmail.current.value.trim();
        const senha = inputPassword.current.value.trim();
        const repete = inputRepeatPas.current.value.trim();
        
    
    
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
        // eslint-disable-next-line no-useless-escape
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return setStatus({type:'error',mensagem:'Campo email invalido !'});
        }
        if(!senha){
            return  setStatus({type:'error',mensagem:'Necessario  preencher o campo senha!'});
        } 
        if(senha.length < 6){ 
            return setStatus({type:'error', mensagem:'informe uma senha com no minimo 6 caracteres'})
        }  
        if(senha !== repete){
          return setStatus({type:'error', mensagem:'as senha nao conferem'})
        } 
        return true;
    }
    function ClearFields(){
        inputName.current.value = '';
        inputEmail.current.value = '';
        inputPassword.current.value = '';
        inputRepeatPas.current.value = '';
    }
  return (

    <div className="container-cadastrar">
            <Logo/>  
        <form>
            <div className="icon1">
                <i className="bi bi-person-circle"></i>   
            </div>
            <div className="inputsCadastro">
                    <div className="inputIcon">
                        <i className='bi bi-person-fill'></i>
                        <input className='input-nome1' type="text" name="nome" id="nome"  placeholder='Nome completo' ref={inputName}/>
                    </div> 
                    <div className="inputIcon">
                        <i className='bi bi-envelope-fill'></i>
                        <input className='input-email' type="email" name="email" id="email" placeholder='Email' ref={inputEmail} />
                    </div>   
                    <div className="inputIcon">
                        <i className='bi bi-lock-fill'></i>
                        <input className='input-password' type="password" name="senha" id="senha1" placeholder='Senha' ref={inputPassword} />
                    </div>   
                    <div className="inputIcon">
                        <i className='bi bi-lock-fill'></i>
                        <input className='input-password-repeat' type="password" name="senhaRepete"  id="senhaRepete" placeholder='Repete senha' ref={inputRepeatPas} />
                    </div>   
            </div>
            <div className='button'>
                <button type='button' onClick={CreateUser} className="buttons">Cadastrar</button>
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

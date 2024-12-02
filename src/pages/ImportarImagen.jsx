import '../css/ImportarImagen_css/ImportarImagem.css';
import '../css/Dashbord.css';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from "react";
import { Client } from '@microsoft/microsoft-graph-client';
// import { InteractiveBrowserCredential } from '@azure/identity';
import { msalInstance } from '../../services/MSAL';

import MenuLateral from '../components/MenuLateral/MenuLateral';




// Configuração do cliente do Azure para autenticação
// const credential = new InteractiveBrowserCredential({
//   clientId: 'e5c92c06-bce9-4f4d-9c7b-99e2bbdfeaa5',
//   tenantId: 'common', // Você pode usar 'common' para contas pessoais ou seu Tenant específico
//   redirectUri: 'http://localhost:3000/imagem',
// });

// Login com Microsoft



export default function ImportarImagen() {
  const [isConsorcio, setIsConsorcio] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [arquivosEnviados, setArquivosEnviados] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  //precisar se iniciliazado antes de tudo , pra fzer o login
  useEffect(() => {
    const initializeMsal = async () => {
      try {
        await msalInstance.initialize();
        console.log("MSAL inicializado com sucesso!");
      } catch (error) {
        console.error("Erro ao inicializar o MSAL:", error);
      }
    };
  
    initializeMsal();
  }, []);

  const loginWithMicrosoft = async (setIsAuthenticated) => {
    try {
      const loginResponse = await msalInstance.loginPopup({
        scopes: ["User.Read", "Files.ReadWrite"],
        prompt: "select_account", // Força a seleção da conta
      });
      console.log("Login bem-sucedido:", loginResponse);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Erro de autenticação:", error);
      alert("Falha no login. Veja o console para detalhes.");
    }
  };
  
  // Criação do Cliente do Microsoft Graph
  const getGraphClient = () => {
    const account = msalInstance.getAllAccounts()[0];
    if (!account) {
      console.error("Nenhuma conta autenticada encontrada.");
      return null;
    }
  
    return Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async () => {
          try {
            const tokenResponse = await msalInstance.acquireTokenSilent({
              scopes: ["User.Read", "Files.ReadWrite"],
              account,
            });
            return tokenResponse.accessToken;
          } catch (error) {
            console.error("Erro ao obter token:", error);
            throw error;
          }
        },
      },
    });
  };
  
  // Envio de Arquivo para o OneDrive
  const uploadToOneDrive = async (file, setArquivosEnviados) => {
    const client = getGraphClient();
    if (!client) {
      console.error("Cliente não disponível");
      return;
    }
  
    try {
      const response = await client
        .api(`/me/drive/root:/uploads/${file.name}:/content`)
        .put(file);
  
      console.log("Arquivo enviado com sucesso:", response);
      setArquivosEnviados((prev) => [...prev, file.name]);
      alert(`Arquivo "${file.name}" enviado com sucesso!`);
    } catch (error) {
      console.error("Erro ao enviar arquivo para o OneDrive:", error);
      alert(`Erro ao enviar o arquivo "${file.name}". Verifique o console.`);
    }
  };
  

// Verifica o estado do MSAL
useEffect(() => {
  if (!msalInstance) {
    console.error("MSAL instance não inicializado");
  }
}, []);

// Manipula o upload de arquivos
const handleFileUpload = async (event) => {
  if (!isAuthenticated) {
    alert("Você precisa estar autenticado para enviar arquivos. Faça login.");
    return;
  }

  const selectedFiles = event.target.files;
  const arquivosInvalidos = [];

  Array.from(selectedFiles).forEach((file) => {
    if (file.size > 5 * 1024 * 1024) {
      arquivosInvalidos.push(`${file.name}: Tamanho excede 5MB`);
      return;
    }

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      arquivosInvalidos.push(`${file.name}: Tipo inválido`);
      return;
    }

    uploadToOneDrive(file, setArquivosEnviados);
  });

  if (arquivosInvalidos.length) {
    alert(`Os seguintes arquivos são inválidos:\n${arquivosInvalidos.join("\n")}`);
  }
};

  useEffect(() => {
    console.log(isConsorcio);
  }, [isConsorcio]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const logoutWithMicrosoft = async () => {
    try {
      await msalInstance.logoutPopup();
      setIsAuthenticated(false); // Atualize o estado para refletir que o usuário foi desconectado
      alert("Logout realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      alert("Erro ao tentar fazer logout. Veja o console para mais detalhes.");
    }
  };
  

  return (
    <div className='cor-de-fundo'>
        <MenuLateral/>
        <div className='orv-importar-imagem'>
              <div className='orv-fundo-trans'>
                  <div className='orv-titulo-imagem'><h2>Importar Imagens</h2></div>
                  <button onClick={() => loginWithMicrosoft(setIsAuthenticated)}>Fazer Login com Microsoft</button>

                  <div className='orv-info'>
                      <div className='orv-sele-consorcio'>
                        <div className='orv-lado'><label htmlFor="consorcio-select">Selecione um consórcio :</label>
                            <select value={isConsorcio} onChange={e => setIsConsorcio(e.target.value)} id="consorcio-select">
                            <option value="">Escolha uma opção</option>
                            <option value="awa">Awa</option>
                            <option value="social">Social</option>
                            </select>
                        </div>
                        {isConsorcio==='awa'?<><div className='orv-lado'>
                            <label htmlFor="obra-select">Selecione uma Obra :</label>
                            <select  id="obra-select">
                            <option value="">Escolha uma opção</option>
                            <option value="obra1">Obra 1</option>
                            <option value="obra2">Obra 2</option>
                            </select>
                        </div>
                        <div className='orv-lado'>
                          <label htmlFor="setor-select">Selecione um Setor:</label>
                          <select  id="setor-select">
                            <option value="">Escolha uma opção</option>
                            <option value="engenharia">Engenharia</option>
                            <option value="seguranca">Segurança</option>
                            <option value="ambiental">Ambiental</option>
                            <option value="social">Social</option>
                          </select>
                        </div>
                        <div className='orv-lado'>
                            <label htmlFor="subpasta-select">Selecione a Subpasta:</label>
                            <select  id="subpasta-select">
                            <option value="">Escolha uma opção</option>
                            <option value="int-urb">Int-urb</option>
                            <option value="ses">Ses</option>
                            <option value="hab">Hab</option>
                            <option value="map">Map</option>
                            <option value="social">Social</option>
                            </select>
                        </div>
                        <div className='orv-lado'>
                        <label htmlFor="data-select">Selecione uma data:</label>
                            <input
                              type="date"
                              id="data-select"
                              value={selectedDate}
                              onChange={handleDateChange}
                            />
                        </div>
                        </>:
                        <>
                        <div className='orv-lado'>
                        <label htmlFor="data-select">Selecione uma data:</label>
                            <input
                              type="date"
                              id="data-select"
                              value={selectedDate}
                              onChange={handleDateChange}
                            />
                        </div>
                        <div className='orv-lado-label'>
                            <label htmlFor="local-select">Preencha com o título da Ação e Obra</label>
                            <input type="text" name="local" id="local-select"/>
                            
                        </div>
                        <div className='orv-lado'>
                            <label htmlFor="periodo-select">Selecione o período:</label>
                            <select  id="periodo-select">
                            <option value="">Escolha uma opção</option>
                            <option value="manha">Manhã</option>
                            <option value="tarde">tarde</option>
                            <option value="noite">Noite</option>
                            </select>
                        </div>
                        </>
                        }
                  </div>
                      <div className='orv-sele-update'>
                        <div className='orv-container-photo'>
                          <div className='orv-update-photo'>
                              <label className='label-photo' htmlFor="selecionar-photo">Selecionar ou Arrastar fotos..</label>
                              <input type="file"  id="selecionar-photo"  className='file-input' multiple accept="image/png, image/jpeg" onChange={handleFileUpload}/>
                          </div>
                          <div className='orv-list-photo'>
                             <div className='orv-list-upload'>
                                  <div className='item'><i className='icon bi bi-image-fill'></i></div>
                                  <div className='item'><p> ARQUIVO</p></div>
                                  <div className='item' ><i className='bi bi-check-circle-fill'></i> </div>
                              </div>
                              <div className='orv-list-upload'>
                                  <div className='item'><i className='icon bi bi-image-fill'></i></div>
                                  <div className='item'><p> ARQUIVO</p></div>
                                  <div className='item' ><i className="bi bi-x-circle-fill"></i></div>
                              </div>
                              <div className='orv-list-upload'>
                                  <div className='item'><i className='icon bi bi-image-fill'></i></div>
                                  <div className='item'><p> ARQUIVO</p></div>
                                  <div className='item' ><i className="bi bi-arrow-clockwise"></i></div>
                              </div>
                              
                              <button onClick={() => logoutWithMicrosoft()}>Fazer Logout</button>
                          </div>
                        </div>  
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

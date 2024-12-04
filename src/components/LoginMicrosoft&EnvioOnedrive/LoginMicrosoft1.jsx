import logoMicrosoft from '../img/icons8-microsoft-50.png'
import { useState, useEffect } from "react";
import { Client } from '@microsoft/microsoft-graph-client';
// import { InteractiveBrowserCredential } from '@azure/identity';
import { msalInstance } from '../../services/MSAL';


export default function LoginMicrosoft1() {
  return (
    const [isConsorcio, setIsConsorcio] = useState('');
    const [isObra,setIsObra]=useState('');
     const [isSetor,setIsSetor]=useState('');
     const [isSub,setISsub]=useState('');
    const [isTitulo,setisTitulo]=useState('');
  const [isPeriodo,setisPeriodo]=useState('');
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
      alert("Login bem-sucedido:", loginResponse);
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
    // Atualiza o status para 'loading' antes de iniciar o upload
  
  // Atualiza o status para 'loading' antes de iniciar o upload
  // Atualiza o status para 'loading' antes de iniciar o upload
  setArquivosEnviados((prev) =>
    prev.map((f) => (f.name === file.name ? { ...f, status: "loading" } : f))
  );
  
    try {
      const response =isConsorcio==='awa' 
      ? await client
        .api(`/me/drive/root:/${isConsorcio}/${isObra}/${isSetor}/${isSub}/${selectedDate}/${file.name}:/content`)
        .put(file)

      :await client
      .api(`/me/drive/root:/${isConsorcio}/${selectedDate}/${isTitulo}/${isPeriodo}/${file.name}:/content`)
        .put(file)
    
        if (response) {
          console.log("Arquivo enviado com sucesso:", response);
    
          // Atualiza o status para "success" após o upload
          setArquivosEnviados((prev) =>
            prev.map((f) =>
              f.name === file.name ? { ...f, status: "success" } : f
            )
          );
        }
    } catch (error) {
      console.error("Erro ao enviar arquivo para o OneDrive:", error);
      // Atualiza o status para 'error' em caso de falha
    // Atualiza o status para 'error' em caso de falha
    // Atualiza o status para 'error' em caso de falha
    setArquivosEnviados((prev) =>
      prev.map((f) => (f.name === file.name ? { ...f, status: "error" } : f)))
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

  const selectedFiles = Array.from(event.target.files);
  const arquivosInvalidos = [];
  const arquivosValidos = [];

  // Valida os arquivos antes de qualquer envio
  selectedFiles.forEach((file) => {
    if (file.size > 5 * 1024 * 1024) {
      arquivosInvalidos.push(`${file.name}: Tamanho excede 5MB`);
    } else if (!["image/png", "image/jpeg"].includes(file.type)) {
      arquivosInvalidos.push(`${file.name}: Tipo inválido`);
    } else {
      arquivosValidos.push({ name: file.name, file, status: "idle" }); // Adiciona ao array de válidos
    }
  });

  if (arquivosInvalidos.length > 0) {
    alert(`Os seguintes arquivos são inválidos:\n${arquivosInvalidos.join("\n")}`);
  }

  if (arquivosValidos.length > 0) {
    // Adiciona os arquivos válidos ao estado antes de iniciar o upload
    setArquivosEnviados((prev) => [...prev, ...arquivosValidos]);

    // Faz upload de cada arquivo válido
     // Faz upload de cada arquivo válido
     for (const arquivo of arquivosValidos) {
      await uploadToOneDrive(arquivo.file, setArquivosEnviados); // Passa a função de update para manter o estado sincronizado
    }
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
  
    
  )
}

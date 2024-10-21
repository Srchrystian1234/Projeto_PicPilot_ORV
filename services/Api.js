//esse arquivo qie vao fazer a conexao com backend
import axios from "axios";
//- 1 parte é criando consts do axios pra fazer a conexao/
 const api = axios.create({ //criando conexao com servidor
        baseURL:"http://localhost:3000" //local da onde esta vindo os dados
 }) 

 export default api;
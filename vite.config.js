import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';



const certDir = path.resolve('certif'); 

const sslKeyPath =path.resolve(certDir, 'private.key');
const sslCertPath = path.resolve(certDir, 'server.crt');
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  https: {
    key: fs.readFileSync(sslKeyPath),
    cert: fs.readFileSync(sslCertPath),
  },
  server: {
    host: '0.0.0.0', // Isso permite que o Vite escute em todas as interfaces de rede.
    port: 3000, // Defina a porta que você deseja usar. 
    cors: {
      origin: '*', // Permite todas as origens
    },
  },

})


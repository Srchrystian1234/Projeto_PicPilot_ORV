import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "e5c92c06-bce9-4f4d-9c7b-99e2bbdfeaa5",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000/imagem",
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

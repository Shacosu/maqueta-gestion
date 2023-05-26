
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { SkeletonTheme } from 'react-loading-skeleton';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';


const configWSP = {
  phoneNumber: '+5491133333333',
  textMessage: 'Hola, en que podemos ayudarte?',
  companyName: 'KrapyGames',
  message: 'Hola, en que podemos ayudarte?',
  sendButton: 'Enviar',
  placeholder: 'Escribe tu mensaje',
  showPopup: true,
  autoOpenTimeout: 0,
  size: '60px',
  position: 'right',
  allowClickAway: true,
  
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#A9A9A9" enableAnimation={true}>
      <App />
      <FloatingWhatsApp 
        phoneNumber="+56947015035"
        accountName="KrapyGames"
        avatar="https://cdn.discordapp.com/attachments/1092700290840543252/1106334861775618088/Logo.png"
        statusMessage="Servicio al cliente"
        chatMessage="Hola, somos krapyGames en que podemos ayudarte?"
        allowClickAway={true}
        allowEsc={true}
        darkMode={false}
        placeholder="Escribe tu mensaje"
        showPopup={true}
        size="60px"
        position="right"
        autoOpenTimeout={0}
        className="text-black"
      
      />
    </SkeletonTheme>
  </React.StrictMode>,
)

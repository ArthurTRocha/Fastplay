import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import "./chat.css"
import axios from 'axios';
const socket = io('http://localhost:3001'); // Substitua pelo URL do seu servidor
import { TbTrafficConeOff } from "react-icons/tb";


const Chat = () => {
  const [envioHabilitado, setEnvioHabilitado] = useState(true);
  const [mensagemInput, setMensagemInput] = useState('');
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    // Evento para receber mensagens do servidor
    socket.on('resposta', (resposta) => {
      console.log('Mensagem recebida do servidor:', resposta);
      setMensagens((mensagens) => [...mensagens, resposta]);
    });

    // Evento para lidar com tentativas de reconexão
    socket.on('reconnect', (attemptNumber) => {
      console.log('Tentativa de reconexão número:', attemptNumber);
    });

    return () => {
      // console.log('Desconectando o socket');
      // socket.disconnect();
    };
  }, []); 
  console.log(`mensagens`,mensagens);
  const enviarMensagem = () => {

    const mensagem = mensagemInput.trim();
    console.log(`mensagem`,mensagem);
    if (mensagem) {
      // Enviar mensagem para o servidor (para o admin)
      // socket.emit('mensagem', { mensagem });
      socket.emit('mensagem', { mensagem });
      console.log('Enviando mensagem para o servidor:', mensagem);
      // setMensagens([...mensagens, { remetente: 'Você', mensagem }]);
      setMensagemInput('');
    }
  };

  return (
    <div className='chat'>
      <h1>Chat da Empresa</h1>
      <div>
        {mensagens.map((msg, index) => (
          (msg.remetente === 'Você' || msg.remetente === 'Suporte') && (
          <p key={index}>
            <strong>{msg.remetente}:</strong> {msg.mensagem}
          </p>
          )
        ))}
      </div>
      <input
        type="text"
        value={mensagemInput}
        onChange={(e) => setMensagemInput(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button onClick={enviarMensagem}>Enviar</button>

      {/* <TbTrafficConeOff className='TbTrafficConeOff'/> */}
    </div>
  );
};

export default Chat;

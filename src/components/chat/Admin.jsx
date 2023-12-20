import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import "./admin.css"
import axios from 'axios';

const socket = io('http://localhost:3001', {
  withCredentials: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': 'http://localhost:5173',
  },
});

function Admin() {
  const [currentTime, setCurrentTime] = useState('');
  const [formattedTime, setFormattedTime] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [chats, setChats] = useState([]);
  const [respostas, setRespostas] = useState({});
  const [lastMessageTime, setLastMessageTime] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://worldtimeapi.org/api/timezone/America/Sao_Paulo');
  //       setCurrentTime(response.data.datetime);
  //       const rawTime = currentTime;
  //       const formattedTime = rawTime.slice(11, 19); 
  //       setFormatedTime(formattedTime);
  //     } catch (error) {
  //       console.error('Erro ao obster a hora:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 
  useEffect(() => {
    // Função para formatar a hora
    const formatTime = (rawTime) => {
      const formatted = rawTime.slice(11, 19);
      setFormattedTime(formatted);
    };

    // Função para buscar a hora atual
    const fetchTime = async () => {
      try {
        const response = await axios.get('https://worldtimeapi.org/api/timezone/America/Sao_Paulo');
        setCurrentTime(response.data.datetime);
        formatTime(response.data.datetime);
      } catch (error) {
        console.error('Erro ao obter a hora:', error);
      }
    };

    const intervalId = setInterval(fetchTime, 1500);

    fetchTime();

    return () => {
      // Limpa o intervalo ao desmontar o componente
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    // Configura o listener para mensagens recebidas
    socket.on('resposta', (resposta) => {
      if (socket.connected) {
        console.log('Mensagem recebida:', resposta);
        setLastMessageTime(formattedTime);
        setMensagens((mensagens) => [...mensagens, { ...resposta, formattedTime }]);
        // setMensagens((mensagens) => [...mensagens, resposta]);
      }
    },[formattedTime]);

    // Configura o listener para chats disponíveis
    socket.on('chats', (novosChats) => {
      if (socket.connected) {
        console.log('Chats disponíveis:', novosChats);
        setChats(novosChats);
      }
    });

    // Entra como admin
    socket.emit('entrarComoAdmin');

    return () => {
      // Desconecta o socket ao desmontar o componente
      // console.log('Desconectando o socket');
  //     // socket.disconnect();
    };
  }, [formattedTime]);

  // Função para responder a um chat específico
const responderChat = (sala, resposta) => {
  console.log(`Enviando resposta para sala ${sala}: ${resposta}`);
  socket.emit('mensagem', { sala, mensagem: `Admin: ${resposta}` });
};

  
  console.log('chats',chats);
  return (
    <div className='Admin'>
      <h2>Página de Administração</h2>
      {/* Exibe a lista de chats disponíveis */}
      <div>
        <h3>Chats Disponíveis</h3>
        <ul>
        {chats.map((chat) => (
  <div key={chat.sala}>
    <strong>Sala:</strong> {chat.sala}
    <ul>
      {chat.messages.map((msg, index) => (
        <li key={index}>{msg.remetente}: {msg.mensagem}</li>
      ))}
    </ul>
    <input
      type="text"
      placeholder="Responda ao chat"
      value={chat.resposta || ''}
      onChange={(e) => {
        const newChats = chats.map((c) =>
          c.sala === chat.sala ? { ...c, resposta: e.target.value } : c
        );
        setChats(newChats);
      }}
    />
    <button onClick={() => responderChat(chat.sala, chat.resposta)}>Responder</button>
  </div>
))}

        </ul>
      </div>

      {/* Exibe as mensagens recebidas */}
      <div className='mensagensRecebidasAdm'>
        <h3>Mensagens Recebidas</h3>
        {mensagens.map((msg, index) => (
            <p key={index}><strong>{msg.formattedTime} {msg.remetente}:</strong> {msg.mensagem}</p> 
        ))}
      </div>
    </div>
  );
}

export default Admin;

// Importa os módulos necessários
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import './admin.css'; // Importa o estilo do componente

// Cria uma instância do Socket.IO para se conectar ao servidor Node.js
const socket = io('http://localhost:3001', {
  withCredentials: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': 'http://localhost:5173',
  },
});

// Define o componente Admin
function Admin() {
  // Estados para armazenar informações do componente
  const [mensagens, setMensagens] = useState([]); // Armazena mensagens recebidas
  const [chats, setChats] = useState([]); // Armazena informações sobre chats disponíveis

  // Efeito para configurar ouvintes para eventos do servidor Node.js
  useEffect(() => {
    // Ouve eventos 'resposta' do servidor para mensagens recebidas
    socket.on('resposta', (resposta) => {
      if (socket.connected) {
        console.log('Mensagem recebida:', resposta);
        // Adiciona a mensagem recebida ao estado de mensagens
        setMensagens((mensagens) => [...mensagens, { ...resposta }]);
      }
    });

    // Ouve eventos 'chats' do servidor para atualizações sobre chats disponíveis
    socket.on('chats', (novosChats) => {
      if (socket.connected) {
        console.log('Chats disponíveis:', novosChats);
        // Atualiza o estado de chats com as informações mais recentes
        setChats(novosChats);
      }
    });

    // Emite o evento 'entrarComoAdmin' para o servidor
    socket.emit('entrarComoAdmin');

    // Função de limpeza (não faz nada neste caso)
    return () => {};
  }, []); // O efeito é executado apenas uma vez no início

  // Função para enviar uma resposta para um chat específico
  const responderChat = (sala, resposta) => {
    console.log(`Enviando resposta para sala ${sala}: ${resposta}`);
    // Adiciona a resposta ao estado de mensagens e emite o evento 'mensagem' para o servidor
    setMensagens((mensagens) => [...mensagens, { remetente: 'Admin', mensagem: resposta }]);
    console.log('Enviando resposta para o servidor:', resposta);

    socket.emit('mensagem', { sala, mensagem: `Admin: ${resposta}` });
  };

  // Renderiza o componente
  return (
    <div className='Admin'>
      <h2>Página de Administração</h2>

      <div>
        <h3>Chats Disponíveis</h3>
        <ul>
          {/* Mapeia a lista de chats e renderiza informações sobre cada um */}
          {chats.map((chat) => (
            <div key={chat.sala} className="chatContainer">
              <strong>Sala:</strong> {chat.sala} <br />
              <strong>Cliente:</strong> {chat.name}
              <ul>
                {/* Mapeia as mensagens dentro de cada chat e renderiza informações sobre cada mensagem */}
                {chat.messages.map((msg, index) => (
                  <li key={index}>{msg.remetente}: {msg.mensagem}</li>
                ))}
              </ul>
              <div className='mensagensRecebidasAdm'>
                <h3>Mensagens Recebidas</h3>
                {/* Mapeia as mensagens recebidas e renderiza informações sobre cada mensagem */}
                {mensagens.map((msg, index) => (
                  <p key={index}><strong>{msg.remetente}:</strong> {msg.mensagem}</p>
                ))}
              </div>
              {/* Campo de entrada para a resposta do administrador */}
              <input
                type="text"
                placeholder="Responda ao chat"
                value={chat.resposta || ''}
                onChange={(e) => {
                  // Atualiza a resposta no estado local
                  const newChats = chats.map((c) =>
                    c.sala === chat.sala ? { ...c, resposta: e.target.value } : c
                  );
                  // Atualiza o estado de chats com as respostas mais recentes
                  setChats(newChats);
                }}
              />
              {/* Botão para enviar a resposta para o chat específico */}
              <button onClick={() => responderChat(chat.sala, chat.resposta)}>Responder</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Exporta o componente Admin
export default Admin;

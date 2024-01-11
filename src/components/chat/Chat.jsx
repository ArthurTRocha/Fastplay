import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import "./chat.css";
import axios from 'axios';

const socket = io('http://localhost:3001'); // Substitua pelo URL do seu servidor

const Chat = () => {
  const [mensagemInput, setMensagemInput] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [nomeInput, setNomeInput] = useState('');
  const [nomeDefinido, setNomeDefinido] = useState(false);
  const [remetente, setRemetente] = useState('');

  useEffect(() => {
    socket.on('resposta', (resposta) => {
      console.log('Mensagem recebida do servidor:', resposta);
      console.log('Conteúdo da mensagem:', resposta.mensagem);

      setMensagens((mensagens) => [...mensagens, resposta]);
      console.log('Estado atualizado das mensagens:', [...mensagens, resposta]);

    });

    socket.on('reconnect', (attemptNumber) => {
      console.log('Tentativa de reconexão número:', attemptNumber);
    });

    return () => {
      socket.off('resposta');
      socket.off('reconnect');
    };
  }, []); 

  const enviarMensagem = () => {
    const mensagem = mensagemInput.trim();

    if (mensagem) {
      socket.emit('mensagem', { remetente, mensagem });
      console.log('Enviando mensagem para o servidor:', mensagem);
      setMensagens([...mensagens, { remetente, mensagem }]);
      setMensagemInput('');
    }
  };

  const definirNome = () => {
    const nome = nomeInput.trim();
    if (nome) {
      setRemetente(nome);
      setNomeDefinido(true);
      // Emite o evento 'nomeUsuario' para o servidor com o nome definido
      socket.emit('nomeUsuario', nome);
      console.log('Nome enviado para o servidor:', nome); // Adicione esta linha
    }
  };

  return (
    <div className='chat'>
      <h1>Chat da Empresa</h1>

      {!nomeDefinido ? (
        <div>
          <p>Para começar, insira seu nome:</p>
          <input
            type="text"
            value={nomeInput}
            onChange={(e) => setNomeInput(e.target.value)}
            placeholder="Digite seu nome"
          />
          <button onClick={definirNome}>Confirmar Nome</button>
        </div>
      ) : (
        <>
          <div className='mensagensEnviadas'>
            {mensagens.map((msg, index) => (
              <p key={index}>
                <strong>{msg.remetente}:</strong> {msg.mensagem}
              </p>
            ))}
          </div>
          <input
            type="text"
            value={mensagemInput}
            onChange={(e) => setMensagemInput(e.target.value)}
            placeholder="Digite sua mensagem"
          />
          <button onClick={enviarMensagem}>Enviar</button>
        </>
      )}
    </div>
  );
};

export default Chat;

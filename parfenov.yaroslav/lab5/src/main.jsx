import React, {StrictMode, useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const MESSAGES_KEY = 'messages';

function loadMessages() {
  try {
    const messagesJSON = localStorage.getItem(MESSAGES_KEY);

    return messagesJSON ? JSON.parse(localStorage.getItem(MESSAGES_KEY)) : [];
  } catch {
    return [];
  }
}

function MessageCard({message}) {
  return (
    <li className="message" key={message.id}>
      <div className="message-time">{message.time}</div>
      <div className="message-author">{message.author}</div>
      <div className="message-payload">{message.payload}</div>
    </li>
  );
}

function ChatMessages({messages}) {
  useEffect(() => {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
  }, [messages]);

  return (
    <ul className="chat-messages">
      {
        messages.map(message => {
          return (
            <MessageCard message={message} />
          );
        })
      }
    </ul>
  );
}

function ChatMessageForm({sendMessage, clearChat}) {
  const [name, setName] = useState('');
  const [payload, setMessage] = useState('');

  return (
    <form className="chat-message-form">
      <input
        data-testid="chat-name"
        type="text"
        className="name-input"
        value={name}
        placeholder="Введите свое имя"
        onChange = {event => setName(event.target.value)}
      />
      <input
        data-testid="chat-message"
        type="text"
        className="message-input"
        value={payload}
        placeholder="Введите сообщение"
        onChange = {event => setMessage(event.target.value)}
      />
      <button data-testid="chat-send" type="button" onClick={ () => { sendMessage(name, payload); setMessage('') } }>Отправить</button>
      <button type="button" onClick={ () => clearChat() }>Очистить чат</button>
    </form>
  )
}

function HeaderCard() {
  return (
    <div className="header-card">
      МЕССЕНДЖЕР
    </div>
  );
}

function App() {
  const [messages, setMessages] = useState(loadMessages())

  function sendMessage(name, payload) {
    if (name === "" || payload === "") {
      return;
    }

    const newMessage = {
      id: crypto.randomUUID(),
      author: name,
      payload,
      time: new Date(Date.now()).toUTCString(),
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage
    ]);
  }

  function clearChat() {
    setMessages(() => []);
  }

  return <>
    <HeaderCard />
    <ChatMessages messages={messages} />
    <ChatMessageForm sendMessage={sendMessage} clearChat={clearChat} />
  </>;
}

const rootElement = document.querySelector('[data-testid="app"]');

if (!rootElement) {
  throw new Error('Корневой элемент приложения не найден.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

function App() {
  let sendButton = document.getElementById('sendButton');
  let [messages, SetMessages] = useState([]);

  sendButton.onclick = () => {
    let input = document.getElementById('messageInput');
    const message = (
      <>
        <UserMessage />
        <BotMessage prompt={input.value} />
      </>
    );

    SetMessages([...messages, message]);
  };

  return (
    <>
      {messages}
    </>
  );
}

export default App;

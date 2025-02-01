import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

function App() {
  // Initialize a variable to store the send-button as a DOM element.
  let sendButton = document.getElementById('sendButton');

  // Initialize a state hook to keep track of the messages in the session.
  let [messages, SetMessages] = useState([]);

  // Define a click event handler for the send-button.
  sendButton.onclick = () => {

    // Store the text input as a DOM element.
    let input = document.getElementById('messageInput');

    if (!input.value) {
      return null;
    }

    // Create a <div> to store the user's input message and the LLM's response as a message.
    const message = (
      <div>
        <UserMessage input={input.value} />
        <BotMessage prompt={input.value} />
      </div>
    );

    // Clear the user input area.
    input.value = '';

    document.getElementById("chatMessages").scrollTo({
      top: document.getElementById("chatMessages").scrollHeight,
      behavior: 'smooth'
    });

    // Concatenate the new pair of messages into the messages state array.
    SetMessages([...messages, message]);
  };

  // Return the messages as HTML elements.
  return (
    <div>
      {messages}
    </div>
  );
}

export default App;

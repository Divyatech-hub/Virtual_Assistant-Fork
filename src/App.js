import logo from './logo.svg';
import './App.css';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

function App() {
  const prompt = document.getElementById('messageInput').value;

  const message = (
    <>
      <UserMessage />
      <BotMessage prompt={prompt} />
    </>
  );

  return (
    <>
      {message}
    </>
  );
}

export default App;

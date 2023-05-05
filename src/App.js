import './App.css';
import Header from './Header';
import Stories from './Stories';
import FeedForm from './FeedForm';
import FeedPost from './FeedPost';

function App() {
  return (
    <div className="App">

      <Header />
      <Stories />
      <FeedForm />
      <FeedPost nome="Smooth" conteudo="Venha aprender line art só agora" horario="16h"/>
      <FeedPost nome="Smooth" conteudo="Venha aprender line art só agora" horario="16h"/>
      <FeedPost nome="Smooth" conteudo="Venha aprender line art só agora" horario="16h"/>
      <FeedPost nome="Smooth" conteudo="Venha aprender line art só agora" horario="16h"/>
      <FeedPost nome="Smooth" conteudo="Venha aprender line art só agora" horario="16h"/>

    </div>
  );
}

export default App;

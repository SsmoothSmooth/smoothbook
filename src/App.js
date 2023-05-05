import './App.css';
import Header from './Header';
import Stories from './Stories';
import Horrorcat from './resources/Horrorcat.jpg';
import { AiFillVideoCamera } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />

      <div className="feed">
        <div className="feedForm">
          <img src={Horrorcat} />
          <input type="text" placeholder="No que você está persando ?"/>
        </div>
      </div>

      <div className="feedIcons">
        <div className="video">
          
        </div>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";
import { Chat } from './Components/Chat';
import { Login } from './Components/Login';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    
    <div className="App" >
      <nav className="navbar navbar-dark bg-dark">
      <Link to="/">Login</Link><br/>
      <Link to="/chat">Chat</Link><br/>
      </nav>
      
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </div>
  );
}

export default App;

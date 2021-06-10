import logo from './logo.svg';
import './App.css';
import Login from './Components/Login.js'
import Signup from './Signup.js'
import Inventory from './Components/Inventory.js'
import Navbar from './Components/Navbar/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />,
      <Inventory />,
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';
import NoteState from './context/NoteState';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;

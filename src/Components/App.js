import '../App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Menu from './menu/Menu';
import Book from './Book';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/book" element={<Book/>} />
      </Routes>
    </Router>
  );
}

export default App;

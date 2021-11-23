import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

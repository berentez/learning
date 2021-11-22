import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import Main from './components/Main';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route exact path="/" element={<Main showAddTask={showAddTask} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

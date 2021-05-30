import { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [qotd, setQotd] = useState({});

  const baseUrl = 'https://favqs.com/api/';
  const appKey = 'a6198ccc14d52a1b71ec8ec98fbf671a';
  useEffect(() => {
    fetch(`${baseUrl}qotd`)
      .then((response) => response.json())
      .then((data) => setQotd(data.quote));
  }, []);

  return (
    <div className="app">
      <div className="quote-of-the-day">
        <h1>"{qotd.body}"</h1>
        <h3>{qotd.author}</h3>
      </div>
    </div>
  );
}

export default App;

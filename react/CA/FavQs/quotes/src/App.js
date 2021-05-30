import { useEffect, useState } from 'react';

import './app.css';
import Qotd from './components/qotd/qotd';
import QuoteList from './components/quoteList/quoteList';

function App() {
  const [qotd, setQotd] = useState(null);
  const [quotes, setQuotes] = useState([]);

  const baseUrl = 'https://favqs.com/api/';
  const appKey = 'a6198ccc14d52a1b71ec8ec98fbf671a';

  const fetchQotd = () => {
    fetch(`${baseUrl}qotd`)
      .then((response) => response.json())
      .then((data) => {
        setQotd(data.quote);
        setQuotes([]);
      });
  };

  const fetchQuotes = () => {
    fetch(`${baseUrl}quotes`, {
      headers: {
        Authorization: `Token token="${appKey}"`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQotd(null);
        setQuotes(data.quotes);
      })
      .catch((error) => console.error(error));
  };

  const giveMeANewOne = () => {
    fetchQotd();
  };

  const giveMeALot = () => {
    fetchQuotes();
  };

  useEffect(() => {
    fetchQotd();
  }, []);

  return (
    <div className="app">
      {qotd && <Qotd quote={qotd.body} author={qotd.author} />}
      {quotes.length > 0 && <QuoteList quotes={quotes} />}
      <button onClick={giveMeANewOne}>Give me a new one</button>
      <button onClick={giveMeALot}>Give me a lot</button>
    </div>
  );
}

export default App;

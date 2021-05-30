import React from 'react';

import Qotd from '../qotd/qotd';

import './quoteList.css';

const QuoteList = ({ quotes }) => {
  return (
    <div className="quote-list">
      {quotes.map((quote) => (
        <Qotd key={quote.id} quote={quote.body} author={quote.author} />
      ))}
    </div>
  );
};

export default QuoteList;

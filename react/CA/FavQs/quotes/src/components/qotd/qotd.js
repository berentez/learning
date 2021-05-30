import React from 'react';

import './qotd.css';

const Qotd = ({ quote, author }) => {
  return (
    <div className="quote-of-the-day">
      <h1>"{quote}"</h1>
      <h3>{author}</h3>
    </div>
  );
};

export default Qotd;

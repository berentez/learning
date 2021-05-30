import React, { useState } from 'react';
import { Pagination } from 'antd';

import Qotd from '../qotd/qotd';

import './quoteList.css';

const QuoteList = ({ quotes }) => {
  const [page, setPage] = useState(0);
  const pageSize = 6;

  const onPaginationChange = (page, pageSize) => {
    setPage(page - 1);
  };

  return (
    <div className="quote-list">
      {quotes.slice(page * pageSize, (page + 1) * pageSize).map((quote) => (
        <Qotd key={quote.id} quote={quote.body} author={quote.author} />
      ))}
      <Pagination current={page + 1} total={quotes.length} onChange={onPaginationChange} pageSize={pageSize} />
    </div>
  );
};

export default QuoteList;

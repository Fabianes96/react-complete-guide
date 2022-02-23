import React from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments';

export const QuoteDetail = () => {
  const params = useParams()
  return (
    <section>
      <div>QuoteDetail</div>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

import React, { useEffect } from 'react'
import { Route, useParams,Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

export const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams();
  const {quoteId} = params;

  const {sendRequest, status, data:loadedQuote, error} = useHttp(getSingleQuote,true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest,quoteId])
  
  if(status === 'pending'){
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if(error){
    return <div className="centered">{error}</div>
  }

  if(!loadedQuote.text){
    return <p>No quote find!</p>;
  }
  return (
    <section>      
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route exact path={`${match.path}`}>
        <div className="centered">
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

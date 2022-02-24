import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api';

export const NewQuote = () => {
  const {sendRequest, status} = useHttp(addQuote)
  const history = useHistory();

  useEffect(() => {
    let isCancelled = false;
    if(status==='completed'){
      if(!isCancelled){
        history.push('/quotes');
      }
    }
    return ()=>{
      isCancelled = true;
    }
  }, [status,history])
  

  const addQuoteHandler = (quoteData)=>{
    sendRequest(quoteData);
    history.push('/quotes');
  }
  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
  )
}

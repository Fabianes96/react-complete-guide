import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'


export const NewQuote = quoteData => {
  const addQuoteHandler = ()=>{
    console.log(quoteData);
  }
  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  )
}

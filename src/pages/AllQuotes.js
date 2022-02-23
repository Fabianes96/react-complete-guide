import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES=[
  {id: 'q1', author: 'I', text:'Learning React is fun!'},
  {id: 'q2', author: 'Myself', text:'Learning React is great!'},
]
export const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
}

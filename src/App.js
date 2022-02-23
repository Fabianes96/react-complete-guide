import {Redirect, Route, Switch} from 'react-router-dom'
import { AllQuotes } from './pages/AllQuotes';
import { NewQuote } from './pages/NewQuote';
import { QuoteDetail } from './pages/QuoteDetail';

function App() {
  return (
    <Switch>
      <Route exact path='/quotes'>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
      <Route exact path="/">
        <Redirect to="/quotes"/>
      </Route>
    </Switch>
  );
}

export default App;

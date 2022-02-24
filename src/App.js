import {Route, Switch, Redirect, Routes, Navigate} from 'react-router-dom'
import { MainHeader } from './components/MainHeader';
import { ProductDetail } from './pages/ProductDetail';
import { Products } from './pages/Products';
import { Welcome } from './pages/Welcome';
function App() {  
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to="/welcome" />} />       
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />          
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>

        {/* Version 5 */}
        {/* <Switch>
          <Route exact path='/'>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />        
          </Route>
          <Route exact path="/products">
            <Products />        
          </Route>
          <Route path='/products/:id'>
            <ProductDetail />
          </Route>
        </Switch> */}
      </main>
    </div>
  );
}

export default App;

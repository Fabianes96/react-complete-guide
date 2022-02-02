import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Meals } from "./components/Meals/Meals";
import { CartContextPrivider } from "./store/cart-context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () =>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
    <CartContextPrivider>
      {cartIsShown && <Cart hideCart={hideCartHandler}/>}
      <Header title="ReactMeals" showCart={showCartHandler} />        
      <main>
        <Meals />
      </main>
    </CartContextPrivider>
  );
}

export default App;

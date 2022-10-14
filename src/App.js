import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
   return(
      <>
      <CartContextProvider>
         <BrowserRouter>
         <NavBar/>
         <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart />}></Route>
         </Routes>
         </BrowserRouter>
      </CartContextProvider>
      </>
   );
}

export default App;

// <ItemListContainer /> (TODOS LOS ItemsCards)
// <ItemDetailContainer /> (UN SOLO ItemCard) 





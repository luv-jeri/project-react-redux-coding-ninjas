import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import SignIn from './pages/SignIn/SignIn';
import Protected from './component/Protected/Protected';
import Nav from './component/Nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/cart'
          element={
            <Protected>
              <Cart />
            </Protected>
          }
        />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

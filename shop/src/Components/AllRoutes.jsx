
import { Route, Routes } from 'react-router-dom';
import { Cart } from './Cart';
import { Data } from './Data';
import { Checkout } from './Checkout';


function AllRoute() {
  return (
      <Routes>
      <Route path='/' element={<Data/>}/> 
      <Route path='checkout' element={<Checkout/>}/> 
        <Route path='/cart' element={<Cart/>}/> 
      </Routes>   

  );
}

export default AllRoute;

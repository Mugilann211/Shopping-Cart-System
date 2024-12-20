import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Navbar: React.FC = () => {
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <nav>
      <h1>Shopping Cart</h1>
      <p>Total: ${totalAmount.toFixed(2)}</p>
    </nav>
  );
};

export default Navbar;

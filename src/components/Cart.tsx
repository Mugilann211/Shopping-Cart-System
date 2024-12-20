import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeItem, updateItemQuantity } from '../features/cartSlice';
import './Cart.css'
const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul className="cart-items">
        {items.map(item => (
          <li className="cart-item" key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
              min="1"
            />
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Cart;

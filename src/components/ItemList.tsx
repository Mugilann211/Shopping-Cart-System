import React from 'react';
import './ItemList.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const items: Item[] = [
  { id: 1, name: 'Item 1', price: 10, quantity: 5 },
  { id: 2, name: 'Item 2', price: 20, quantity: 3 },
  { id: 3, name: 'Item 3', price: 30, quantity: 7 },
  { id: 4, name: 'Item 4', price: 60, quantity: 6 },
  { id: 5, name: 'Item 5', price: 210, quantity: 6 },
  { id: 6, name: 'Item 6', price: 70, quantity: 6 },
  { id: 7, name: 'Item 7', price: 160, quantity: 6 },
];

const ItemList: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: Item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  return (
    <div className="items-container">
      <h2>Items</h2>
      <ul className="items-list">
        {items.map(item => (
          <li className="item-card" key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Available Quantity: {item.quantity}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

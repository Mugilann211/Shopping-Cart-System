import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <Cart />
    </div>
  );
}

export default App;

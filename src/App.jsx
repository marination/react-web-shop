import Countdown from 'react-countdown';
import './assets/App.css';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import CartProvider from './context/CartContext';

function App() {
  var today = new Date();
  today.setHours(today.getHours() + 4);
  
  return (
    <div className='Shop'>
      <CartProvider>
        <Navbar></Navbar>
        <div className='Count-down'>
          <span>Sale ends in : </span>
          <nbsp></nbsp>
          <span style={{"color": "#e76161"}}>
            <Countdown date={today}></Countdown>
          </span>
        </div>

        <div className='Shop-area'>
          <div id='Filters-container'>Filters</div>
          <ProductGrid></ProductGrid>
        </div>
      </CartProvider>
    </div>
    
    
    
  );
}

export default App;

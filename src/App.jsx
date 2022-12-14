import Countdown from 'react-countdown';
import './assets/styles/App.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import { MobileFiltersToggler, MobileFiltersDrawer } from './components/MobileFilters';
import ProductGrid from './components/ProductGrid';
import CartProvider from './context/CartContext';
import { Footer } from './components/Footer';

function App() {
  var today = new Date();
  today.setHours(today.getHours() + 4);
  
  return (
    <div className='Shop'>
      <CartProvider>
        <Navbar></Navbar>

        <MobileFiltersToggler></MobileFiltersToggler>
        <MobileFiltersDrawer></MobileFiltersDrawer>
        

        <div className='Count-down'>
          <span>Sale ends in :&nbsp;</span>
          <span style={{"color": "#e76161"}}>
            <Countdown date={today}></Countdown>
          </span>
        </div>
        
        <div className='Shop-area'>
          <Filters></Filters>
          <ProductGrid></ProductGrid>
        </div>
      </CartProvider>

      <Footer></Footer>
    </div>
    
    
    
  );
}

export default App;

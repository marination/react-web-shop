import './assets/styles/App.css';
import { CountDown } from './components/Countdown';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import { MobileFiltersToggler, MobileFiltersDrawer } from './components/MobileFilters';
import ProductGrid from './components/ProductGrid';
import CartProvider from './context/CartContext';
import { Footer } from './components/Footer';

function App() {
	return (
		<div className='Shop'>
			<CartProvider>
				<Navbar></Navbar>

				<MobileFiltersToggler></MobileFiltersToggler>
				<MobileFiltersDrawer></MobileFiltersDrawer>

				<CountDown></CountDown>
				
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

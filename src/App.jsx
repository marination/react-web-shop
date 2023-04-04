import './assets/styles/App.css';
import { CountDown } from './components/Countdown';
import Filters from './components/Filters';
import { MobileFiltersToggler, MobileFiltersDrawer } from './components/MobileFilters';
import ProductGrid from './components/ProductGrid';
import { Footer } from './components/Footer';

function App() {
	return (
		<div className='Shop'>
				<CountDown></CountDown>
				
				<div className='Shop-area'>
					<MobileFiltersToggler></MobileFiltersToggler>
					<MobileFiltersDrawer></MobileFiltersDrawer>

					<Filters></Filters>
					
					<ProductGrid></ProductGrid>
				</div>

			<Footer></Footer>
		</div>
		
		
		
	);
}

export default App;

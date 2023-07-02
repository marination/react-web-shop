import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './assets/styles/index.css';

import App from './App';
import ErrorPage from './error-page';
import { Product } from './Product';
import CartProvider from './context/CartContext';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	  	errorElement: <ErrorPage />,
	},
	{
		path: "/product/:id",
		element: <Product />,
		errorElement: <ErrorPage />
	}
]);
  
root.render(
	<React.StrictMode>
		<CartProvider>
				<Navbar></Navbar>
				<RouterProvider router={router} />
				<Footer></Footer>
		</CartProvider>
	</React.StrictMode>
);


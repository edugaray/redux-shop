import React from 'react';
import { Products } from './features/products/Products';
import { TopNav } from './features/navigation/Nav';
import './App.css';

function App() {
  return (
		<div className='App'>
			<TopNav />
			<div className='container'>
				<Products />
			</div>
		</div>
	);
}

export default App;


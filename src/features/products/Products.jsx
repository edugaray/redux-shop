import React, {useEffect} from 'react'
// import the redux hook
import { useDispatch, useSelector } from 'react-redux'  
// import our products selector
import { fetchProducts, productsSelector } from '../../slices/products'
import ProductCard from './ProductCard';


export const Products = () => {
	// initiaise redux hook
	const dispatch = useDispatch();
	const { products, loading, hasErrors } = useSelector(productsSelector);

	//dispatch our thunk when the component first mounts
	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch]);

	// log the data we have pulled into the products variable
	console.log('products: ', products);



  
	if (!products || products.length < 1) {
		return <h1>Server Error</h1>;
	}

	return (
		<div className='products'>
			{products.map((products) => {
				return (
					<ProductCard
						title={products.title}
						image={products.image}
						description={products.description}
						price={products.price}
						key={products.id}
					/>
				);
			})}
		</div>
	);
}
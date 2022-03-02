import React from 'react';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';

const ProductCard = (props) => {
	return (
		<div className='productCard'>
			<ProductTitle title={props.title} />
			<ProductImage image={props.image} altText={props.title} />
			<ProductPrice price={props.price} />
			<ProductDescription description={props.description} />
		</div>
	);
};

export default ProductCard;

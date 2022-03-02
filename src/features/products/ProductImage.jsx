import React from 'react'

const ProductImage = (props) => {
  return (
		<img
			className='product-image'
			src={props.image}
			alt={props.altText}
		/>
	);
}
 
export default ProductImage;


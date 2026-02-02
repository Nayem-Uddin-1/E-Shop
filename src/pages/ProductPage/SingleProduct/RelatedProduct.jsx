import React from 'react'
import { useSelector } from 'react-redux';
import Products from '../../../components/products/Products';
import Container from '../../../components/common/container/Container';



function RelatedProduct({ currentId }) {

  const prods = useSelector((state => state.product.products))



  const currentProduct = prods.find((product) => product.id === currentId);

  const relatedProducts = prods.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.id !== currentProduct.id
  )
    .slice(0, 4);


  console.log("related product id ", relatedProducts);

  return (
    <section className='bg-white'>
      <Container>
        <div className='py-10'>
          <h1 className=' font-bold text-3xl ' >Related Product</h1>
        <Products prods={relatedProducts} type="related" />
        </div>
      </Container>
    </section>
  )
}

export default RelatedProduct
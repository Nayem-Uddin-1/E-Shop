import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RightSide from './RightSide';
import Container from '../../../components/common/container/Container';
import LeftSide from './LeftSide';
import TabDetails from './TabDetails';
import RelatedProduct from './RelatedProduct';

function SingleProductDetails() {

  const { slug } = useParams();
  const prods = useSelector((state => state.product.products))
  const product = prods.find(item => item.slug === slug)

    
    
  return (
    <div>

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">

        <LeftSide product={product} />
        <RightSide product={product} />

      </div>

      <TabDetails />
      <RelatedProduct currentId={product.id} />






    </div>
  )
}

export default SingleProductDetails
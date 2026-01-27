import React from 'react'
import Container from '../../components/common/container/Container'
import Breadcrumbs from '../Shop/Breadcrumbs'
import { FaUser } from 'react-icons/fa';  
import BillingDetails from './BillingDetails';
import OrderSummary from './OrderSummary';

function Checkout() {
  return (
    <Container>
      <Breadcrumbs data={"Checkout"} />
     <div className="flex justify-between ">
        <BillingDetails/>
      <OrderSummary/>
     </div>

    </Container>
  )
}

export default Checkout
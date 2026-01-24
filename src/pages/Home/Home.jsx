import React from 'react'
import Container from '../../components/common/container/Container'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products'
import { CiStar } from "react-icons/ci";



function Home() {
  return (
    <Container>
       <Banner/>
       <Products/>

       <div className='h-50'></div>
    </Container>
  )
}

export default Home
import React from 'react'
import Container from '../../components/common/container/Container'
import Banner from '../../components/banner/Banner'
import { CiStar } from "react-icons/ci";
import GamerWorld from '../../components/gamerWorld/GamerWorld';
import ShopBrand from '../../components/ShopbyBrand/ShopBrand';
import ScrollBanner from '../../components/ScrollBanner/ScrollBanner';
import TopSellingProducts from '../../components/TopSellProducts/TopSellingProducts';



function Home() {
  return (
    <Container>
       <Banner/>
       <GamerWorld/>
       <ShopBrand/>
       <ScrollBanner/>
       <TopSellingProducts/>

       <div className='h-50'></div>
    </Container>
  )
}

export default Home
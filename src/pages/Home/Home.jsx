import React from 'react'
import Container from '../../components/common/container/Container'
import Banner from '../../components/banner/Banner'
import { CiStar } from "react-icons/ci";
import GamerWorld from '../../components/gamerWorld/GamerWorld';
import ShopBrand from '../../components/ShopbyBrand/ShopBrand';
import ScrollBanner from '../../components/ScrollBanner/ScrollBanner';
import TopSellingProducts from '../../components/TopSellProducts/TopSellingProducts';
import BestSaller from '../../components/BestSaller/BestSaller';
import PromoBannerOne from '../../components/PromoBanners/PromoBannerOne';
import PopularSale from '../../components/PopularSales/PopularSale';
import NewsletterBanner from '../../components/NewsletterBanner/NewsletterBanner';



function Home() {
  return (
    <>
       <Banner/>
       <GamerWorld/>
       <ShopBrand/>
       <ScrollBanner/>
       <TopSellingProducts/>
       <BestSaller/>
       <PromoBannerOne/>
       <PopularSale/>
       <NewsletterBanner/>

         
    </>
  )
}

export default Home
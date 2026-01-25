import React from 'react'
import Container from '../../components/common/container/Container'
import Banner from '../../components/banner/Banner'
import { CiStar } from "react-icons/ci";
import GamerWorld from '../../components/gamerWorld/GamerWorld';



function Home() {
  return (
    <Container>
       <Banner/>
       <GamerWorld/>

       <div className='h-50'></div>
    </Container>
  )
}

export default Home
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Container from '../common/container/Container';

import img_1 from "../../assets/images/imgi_1_saller2.png"
import img_2 from "../../assets/images/imgi_1_saller_2.png"
import img_3 from "../../assets/images/imgi_1_saller3.png"
import img_4 from "../../assets/images/imgi_1_saller4.png"
import img_5 from "../../assets/images/imgi_1_saller5.png"
import img_6 from "../../assets/images/imgi_1_saller6.png"


const sellers = [
    { id: 1, name: 'Shopno BD', logo: img_1 },
    { id: 2, name: 'Eecoms Shop', logo: img_2 },
    { id: 3, name: 'Fusion X', logo: img_3 },
    { id: 4, name: 'Rikayi Rox', logo: img_4 },
    { id: 5, name: 'Habbriyi', logo: img_5 },
    { id: 6, name: 'Rayhans', logo: img_6 },
  ];


function BestSaller() {
    return (
        <Container>

            <div className='my-5 flex  justify-between '>
                <h2 className='text-3xl font-bold ' >Best Saller</h2>
                <Link to={"/shop"} target="_blank" className='flex justify-center gap-3 items-center  font-bold ' >
                    <span className="text-red-500 underline">
                        View More

                    </span>

                    <FaLongArrowAltRight /> </Link>
            </div>

            <div className=" grid grid-cols-3 gap-5 md:grid-cols-6 md:gap-10 ">

                {
                    sellers.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='w-42.5 h-42.5 rounded-full flex justify-center items-center bg-white'>
                                    <img
                                        src={item.logo}
                                        alt="error"
                                        className='w-[96px] h-[99px] object-contain rounded-full'
                                    />
                                </div>

                                <Link className='flex justify-center mt-5 items-center'>
                                    {item.name}
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </Container>
    )
}

export default BestSaller
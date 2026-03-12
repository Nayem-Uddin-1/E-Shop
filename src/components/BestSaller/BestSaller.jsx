import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Container from '../common/container/Container';



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
                    Array(6).fill().map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='w-42.5 h-42.5 rounded-full flex justify-center items-center bg-white'>
                                    <img
                                        src="https://shopo.quomodothemes.website/assets/images/saller-1.png"
                                        alt="error"
                                        className='border w-[96px] h-[99px] rounded-full'
                                    />
                                </div>

                                <Link className='flex justify-center mt-5 items-center'>
                                    Shopno BD
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
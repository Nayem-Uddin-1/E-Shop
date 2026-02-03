import React from 'react'
import { GoHome } from "react-icons/go";
import { Link } from 'react-router-dom';


function Breadcrumbs({data}) {
  return (
    <div className='flex  items-center  gap-2 my-10 text-[16px]'>
      <Link to={"/"} className='text-orange-600'>
        Home
      </Link>
      <span>/</span>
      <Link to={"/carts"} className='text-orange-600' >
      {data}
      </Link>
    </div>
  )
}

export default Breadcrumbs
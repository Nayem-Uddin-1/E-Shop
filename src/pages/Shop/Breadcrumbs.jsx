import React from 'react'
import { GoHome } from "react-icons/go";
import { Link } from 'react-router-dom';


function Breadcrumbs({data}) {
  return (
    <div className='flex  items-center  gap-5 pt-10 ml-5 mb-5 font-bold text-[25px]'>
      <Link className=''>
        Home
      </Link>
      <Link>
      {data}
      </Link>
    </div>
  )
}

export default Breadcrumbs
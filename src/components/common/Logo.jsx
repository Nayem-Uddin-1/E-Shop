import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className="flex items-center gap-2 cursor-pointer">
            <Link to={"/"} >
                <h1 className="text-4xl font-bold flex items-center tracking-tight">
                    <span className="text-[#001730]">E</span>
                    <span className="text-[#ad1a00]">.</span>
                    <span className="text-[#FFB433]">Shop</span>                    
                </h1>
            </Link>
        </div>
    )
}

export default Logo
import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className="flex items-center gap-2 shrink-0 cursor-pointer">
            <Link to={"/"} >
                <h1 className="text-4xl font-bold flex items-center tracking-tight">
                    <span className="text-[#FFB433]">Shop</span>
                    <span className="text-[#001730]">P</span>
                    <span className="text-green-400">i</span>
                    <span className="text-[#001730]">XO</span>
                </h1>
            </Link>
        </div>
    )
}

export default Logo
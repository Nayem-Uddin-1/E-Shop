import React, { useState } from 'react'

function Register() {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit" , name , email , password);

        setName("")
        setEmail("")
        setPassword("")

    }

    return (
        <div>
            <div className='w-80 absolute right-17 top-15 rounded-xl bg-[#FFFFFF] p-10 shadow-sm shadow-gray-800 '>

                <h2>Sign in your account</h2>

                <form onSubmit={handleSubmit} >
                    <div className="flex flex-col mt-5 ">
                        <label>Name</label>
                        <input type='text' placeholder='enter name' value={name} className='border p-1 rounded' onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col mt-5 ">
                        <label>Email</label>
                        <input type='email' placeholder='enter email' value={email} className='border p-1 rounded'
                          onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Password</label>
                        <input type='password' placeholder='enter password' value={password} className='border p-1 rounded'
                        onChange={(e)=>setPassword(e.target.value)} />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        
                    >
                        Sign in
                    </button>


                </form>

            </div>



        </div>
    )
}

export default Register
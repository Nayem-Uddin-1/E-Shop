import React, { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      {/* Main Container */}
      <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl w-[768px] max-w-full min-h-[480px]">
        
        {/* Sign Up Form Container */}
        <div className={`absolute top-0 h-full transition-all duration-700 ease-in-out left-0 w-1/2 opacity-0 z-10 ${isSignUp ? 'translate-x-full opacity-100 z-50' : ''}`}>
          <form className="bg-white flex flex-col items-center justify-center h-full px-10 text-center">
            <h1 className="text-3xl font-bold mb-4">Create Account</h1>
            <div className="flex space-x-3 mb-4">
              <SocialIcon icon={<FaGooglePlusG />} />
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaGithub />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
            <span className="text-xs text-gray-500 mb-2">or use your email for registration</span>
            <input type="text" placeholder="Name" className="bg-gray-100 border-none p-3 my-2 w-full rounded-lg outline-none" />
            <input type="email" placeholder="Email" className="bg-gray-100 border-none p-3 my-2 w-full rounded-lg outline-none" />
            <input type="password" placeholder="Password" className="bg-gray-100 border-none p-3 my-2 w-full rounded-lg outline-none" />
            <button className="bg-indigo-600 text-white text-xs font-bold py-3 px-11 rounded-lg uppercase tracking-wider mt-4 hover:bg-indigo-700 transition">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form Container */}
        <div className={`absolute top-0 h-full transition-all duration-700 ease-in-out left-0 w-1/2 z-20 ${isSignUp ? 'translate-x-full' : ''}`}>
          <form className="bg-white flex flex-col items-center justify-center h-full px-10 text-center">
            <h1 className="text-3xl font-bold mb-4">Sign In</h1>
            <div className="flex space-x-3 mb-4">
              <SocialIcon icon={<FaGooglePlusG />} />
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaGithub />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
            <span className="text-xs text-gray-500 mb-2">or use your email password</span>
            <input type="email" placeholder="Email" className="bg-gray-100 border-none p-3 my-2 w-full rounded-lg outline-none" />
            <input type="password" placeholder="Password" className="bg-gray-100 border-none p-3 my-2 w-full rounded-lg outline-none" />
            <a href="#" className="text-xs text-gray-600 mt-2 hover:underline">Forgot Your Password?</a>
            <button className="bg-indigo-600 text-white text-xs font-bold py-3 px-11 rounded-lg uppercase tracking-wider mt-4 hover:bg-indigo-700 transition">Sign In</button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-[100] ${isSignUp ? '-translate-x-full rounded-r-[100px] rounded-l-none' : 'rounded-l-[100px]'}`}>
          <div className={`bg-gradient-to-r from-[#FFB82E] to-purple-600 text-white relative -left-full h-full w-[200%] transition-transform duration-700 ease-in-out ${isSignUp ? 'translate-x-1/2' : 'translate-x-0'}`}>
            
            <div className="absolute flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 transition-transform duration-700 ease-in-out translate-x-0">
               <h1 className="text-3xl font-bold mb-4 text-white">Welcome Back!</h1>
               <p className="text-sm leading-5 mb-8">Enter your personal details to use all of site features</p>
               <button 
                onClick={() => setIsSignUp(false)}
                className="bg-transparent border border-white text-white text-xs font-bold py-3 px-11 rounded-lg uppercase tracking-wider hover:bg-white hover:text-indigo-600 transition"
               >
                 Sign In
               </button>
            </div>

            <div className={`absolute flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 transition-transform duration-700 ease-in-out right-0 ${isSignUp ? 'translate-x-0' : 'translate-x-[20%]'}`}>
               <h1 className="text-3xl font-bold mb-4 text-white">Hello, Friend!</h1>
               <p className="text-sm leading-5 mb-8">Register with your personal details to use all of site features</p>
               <button 
                onClick={() => setIsSignUp(true)}
                className="bg-transparent border border-white text-white text-xs font-bold py-3 px-11 rounded-lg uppercase tracking-wider hover:bg-white hover:text-indigo-600 transition"
               >
                 Sign Up
               </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for social icons
const SocialIcon = ({ icon }) => (
  <a href="#" className="border border-gray-300 rounded-lg inline-flex justify-center items-center m-1 h-10 w-10 text-gray-700 hover:bg-gray-50 transition">
    {icon}
  </a>
);

export default AuthPage;
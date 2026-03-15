import React from 'react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube 
} from 'react-icons/fa';
import Container from '../container/Container';
import Logo from '../Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Feature",
      links: ["About Us", "Terms Condition", "Best Products"]
    },
    {
      title: "General Links",
      links: ["Blog", "Tracking Order", "Become Seller"]
    },
    {
      title: "Helpful",
      links: ["Flash Sale", "FAQ", "Support"]
    }
  ];

  return (
      <footer className="w-full border bg-white border-gray-100 font-sans py-10">
   <Container>
      <div className="">
        
       
             <Logo/>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 items-center justify-center">
          {/* About Us Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">About Us</h3>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              We know there are a lot of threa developers our but we pride into a firm in the industry.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className='ml-10'>
              <h3 className="text-lg font-bold text-gray-900 mb-6">{section.title}</h3>
              <ul className="space-y-4 ">
                {section.links.map((link) => (
                  <li key={link}  >
                    <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-100 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Socials and Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-5 text-gray-600">
              <a href="#" className="hover:text-yellow-500 transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><FaFacebookF size={18} /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><FaYoutube size={20} /></a>
            </div>
            <p className="text-gray-400 text-sm">
              ©{currentYear} <span className="font-bold text-gray-800">Nayem.dev</span> All rights reserved
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center gap-2">
            {/* Using placeholder colors for payment logos - replace with actual SVGs/Images */}
            {['VISA', 'MasterCard', 'PayPal', 'Skrill', 'Maestro', 'Visa Electron'].map((method) => (
              <div key={method} className="h-8 px-3 bg-gray-50 border border-gray-100 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-[10px] font-bold text-gray-400 italic">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
   </Container>
    </footer>
  );
};

export default Footer;
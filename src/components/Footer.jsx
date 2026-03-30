import React from 'react';
import { Youtube, Facebook, Twitter } from "lucide-react";

const Footer = () => {
    return (
       <footer className="bg-[#0B1220] text-gray-300 pt-16 px-6">
           <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
             
             {/* Left Section */}
             <div>
                <h2 className="text-white font-bold text-xl mb-4">DigiTools</h2>
               <p className="text-sm leading-relaxed">
                 Premium digital tools for creators, professionals, and businesses.
                 Work smarter with our suite of powerful tools.
               </p>
             </div>
       
             {/* Features */}
             <div>
               <h4 className="text-white font-semibold mb-4">Features</h4>
               <ul className="space-y-2 text-sm">
                 <li>Products</li>
                 <li>Features</li>
                 <li>Pricing</li>
                 <li>Templates</li>
                 <li>Integrations</li>
               </ul>
             </div>
       
             {/* About */}
             <div>
               <h4 className="text-white font-semibold mb-4">About</h4>
               <ul className="space-y-2 text-sm">
                <li>Company</li>
                <li>About</li>
                 <li>Blog</li>
                 <li>Careers</li>
                 <li>Press</li>
               </ul>
             </div>
       
             {/* Documentation + Social */}
             <div>
               <h4 className="text-white font-semibold mb-4">Documentation</h4>
               <ul className="space-y-2 text-sm mb-6">
                <li>Resources</li>
                <li>Documentations</li>
                 <li>Help Center</li>
                 <li>Community</li>
                 <li>Contact</li>
               </ul>
       
               {/* Social Icons */}
               <div className="flex gap-3">
                 <div className="bg-white text-black p-2 rounded-full">
                   <Youtube size={16} />
                 </div>
                 <div className="bg-white text-black p-2 rounded-full">
                   <Facebook size={16} />
                 </div>
                 <div className="bg-white text-black p-2 rounded-full">
                   <Twitter size={16} />
                 </div>
               </div>
             </div>
       
           </div>
       
           {/* Divider */}
           <div className="border-t border-gray-700 mt-12"></div>
            <div className='space-between flex mt-6 text-sm text-gray-500'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className='flex'>
                    <p>Privacy Policy           Terms of Service           Cookies</p>
                </div>
            </div>
           {/* Bottom spacing */}
           <div className="py-6 text-center text-sm text-gray-500">
           </div>
         </footer> 
    );
};

export default Footer;
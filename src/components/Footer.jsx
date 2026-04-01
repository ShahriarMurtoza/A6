import React from 'react';


const Footer = () => {
    return (
      
          <><section className="flex flex-col items-center justify-center min-h-[400px] px-6 py-20 text-center text-white bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        {/* Heading */}
        <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl mb-10 text-lg opacity-90">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 mb-8 sm:flex-row">
          <button className="px-8 py-3 font-semibold text-purple-700 transition-colors bg-white rounded-full hover:bg-gray-100">
            Explore Products
          </button>
          <button className="px-8 py-3 font-semibold transition-all border-2 border-white rounded-full hover:bg-white hover:text-purple-700">
            View Pricing
          </button>
        </div>

        {/* Benefits / Trust Markers */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium opacity-80">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>


        {/* footer */}

        </section>
        <footer className="bg-[#0B1220] text-gray-300 pt-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        
            {/* Left Section */}
            <div className='mr-4'>
              <h2 className="text-white font-bold text-3xl mb-4 ">DigiTools</h2>
              <p className="text-sm leading-relaxed">
                Premium digital tools for creators, professionals, and businesses.
                Work smarter with our suite of powerful tools.
              </p>
            </div>
        
            {/* products */}
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>
        
            {/* company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
        
            {/* resources + Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
        
              <div className="flex justify-between">
                {/* Resources List */}
                <ul className="space-y-2 text-sm">
                  <li>Documentations</li>
                  <li>Help Center</li>
                  <li>Community</li>
                  <li>Contact</li>
                </ul>
        
                {/* Social Icons */}
                <div className='-mt-13  ml-12'>
                  <p className="p-3 ">Social Links</p>
                  <div className="flex gap-3">
                    <img src="/src/assets/Instagram.png" alt="" />
                    <img src="/src/assets/Facebook.png" alt="" />
                    <img src="/src/assets/Twitter.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        
     

          {/* Divider */}
          <div className="border-t border-gray-700 mt-12"></div>
          <div className='justify-between flex mt-6 text-sm text-gray-500 px-8'>
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className='flex justify-content-space-between gap-7'>
              <p>Privacy Policy </p>          <p>Terms of Service </p>         <p>Cookies</p>
            </div>
          </div>
          {/* Bottom spacing */}
          <div className="py-6 text-center text-sm text-gray-500">
          </div>
        </footer></> 
    );
};

export default Footer;
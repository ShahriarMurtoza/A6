import React from 'react';

const GetStarted = () => {
    return (
        <div>
           <section className="bg-gray-100 py-20 px-6 md:px-12">
               {/* Heading */}
               <div className="text-center max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                   Get Started In 3 Steps
                 </h2>
                 <p className="text-gray-500 mt-3">
                   Start using premium digital tools in minutes, not hours.
                 </p>
               </div>
           
                


               {/* Cards */}
               <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                 
                 {/* Card 1 */}
                 <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border">
                   <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold w-8 h-8 flex items-center justify-center rounded-full">
                     01
                   </div>
           
                   <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100">
                     <img src="/src/assets/user.png" alt="User Icon" className="text-purple-600 w-7 h-7" />
                   </div>
           
                   <h3 className="mt-6 text-lg font-semibold text-gray-800">
                     Create Account
                   </h3>
           
                   <p className="text-gray-500 text-sm mt-2">
                     Sign up for free in seconds. No credit card required to get started.
                   </p>
                 </div>
           
                 {/* Card 2 */}
                 <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border">
                   <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold w-8 h-8 flex items-center justify-center rounded-full">
                     02
                   </div>
           
                   <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100">
                    <img src="/src/assets/package.png" alt="Box Icon" className="text-purple-600 w-7 h-7" />
                   </div>
           
                   <h3 className="mt-6 text-lg font-semibold text-gray-800">
                     Choose Products
                   </h3>
           
                   <p className="text-gray-500 text-sm mt-2">
                     Browse our catalog and select the tools that fit your needs.
                   </p>
                 </div>
           
                 {/* Card 3 */}
                 <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border">
                   <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold w-8 h-8 flex items-center justify-center rounded-full">
                     03
                   </div>
           
                   <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100">
                     <img src="/src/assets/rocket.png" alt="Rocket Icon" className="text-purple-600 w-7 h-7" />
                   </div>
           
                   <h3 className="mt-6 text-lg font-semibold text-gray-800">
                     Start Creating
                   </h3>
           
                   <p className="text-gray-500 text-sm mt-2">
                     Download and start using your premium tools immediately.
                   </p>
                 </div>
           
               </div>
             </section> 
        </div>
    );
};

export default GetStarted;
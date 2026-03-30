import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className="bg-gray-100 py-16 px-6">
                {/* Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Simple, Transparent Pricing
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                  </p>
                </div>
            
                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  
                  {/* Starter */}
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Starter</h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Perfect for getting started
                      </p>
            
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        $0<span className="text-base font-normal text-gray-500">/Month</span>
                      </h2>
            
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>✔ Access to 10 free tools</li>
                        <li>✔ Basic templates</li>
                        <li>✔ Community support</li>
                        <li>✔ 1 project per month</li>
                      </ul>
                    </div>
            
                    <button className="mt-6 bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition">
                      Get Started Free
                    </button>
                  </div>
            
                  {/* Pro */}
                  <div className="bg-gradient-to-b from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg p-6 flex flex-col justify-between relative">
                    
                    <span className="absolute top-4 right-4 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black font-medium">
                      Most Popular
                    </span>
            
                    <div>
                      <h3 className="text-lg font-semibold">Pro</h3>
                      <p className="text-sm text-purple-200 mb-4">
                        Best for professionals
                      </p>
            
                      <h2 className="text-3xl font-bold mb-4">
                        $29<span className="text-base font-normal text-purple-200">/Month</span>
                      </h2>
            
                      <ul className="space-y-2 text-sm">
                        <li>✔ Access to all premium tools</li>
                        <li>✔ Unlimited templates</li>
                        <li>✔ Priority support</li>
                        <li>✔ Unlimited projects</li>
                        <li>✔ Cloud sync</li>
                        <li>✔ Advanced analytics</li>
                      </ul>
                    </div>
            
                    <button className="mt-6 bg-white text-purple-700 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                      Start Pro Trial
                    </button>
                  </div>
            
                  {/* Enterprise */}
                  <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Enterprise</h3>
                      <p className="text-sm text-gray-400 mb-4">
                        For teams and businesses
                      </p>
            
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        $99<span className="text-base font-normal text-gray-500">/Month</span>
                      </h2>
            
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>✔ Everything in Pro</li>
                        <li>✔ Team collaboration</li>
                        <li>✔ Custom integrations</li>
                        <li>✔ Dedicated support</li>
                        <li>✔ SLA guarantee</li>
                        <li>✔ Custom branding</li>
                      </ul>
                    </div>
            
                    <button className="mt-6 bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition">
                      Contact Sales
                    </button>
                  </div>
            
                </div>
              </div>
        </div>
    );
};

export default Pricing;
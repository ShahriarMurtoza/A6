import React from 'react';
import { useState } from 'react';

const Productcard = ({product, carts, setCarts}) => {
    const [isSubscribed, setIsSubscribed] = useState (false);
    const handleSubscribe = () => {
        setIsSubscribed(true);
        setCarts([...carts, product]);
    }

    return (
        
            <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-500'>
                 <div className='flex justify-center items-center h-50 bg-zinc-300'>
                     <img className='h-10 w-10 object-contain' src={product.image} alt={product.name} />
                 </div>
            
                 <div className='p-4 space-y-3'>
                    <h2 className='text-2xl font-semibold'>{product.name}</h2>
                    <p>{product.description}</p>
                    <div className='text-2xl font-bold'>${product.price}/month</div>
                    <div>✔{product.tag}</div>
                    <div>✔{product.tagType}</div>
                    <button  onClick={handleSubscribe} className='btn btn-wide  bg-purple-500 text-white rounded-lg mt-5hover:bg-purple-600 justify-center items-center w-full'>
                        {isSubscribed ? "Subscribed" : "Subscribe Now"}
                    </button>
                 </div>
             </div> 
        
    );
};

export default Productcard;
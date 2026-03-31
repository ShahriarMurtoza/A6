import React, { use } from 'react';


const Products = ({ productsPromise }) => {
    const products =use(productsPromise);
    console.log(products);
    return (
        <div className='py-20 max-w-7xl mx-auto px-5 space-y-10'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {products.map(product => <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-500'>
                    <div className='flex justify-center items-center h-50 bg-zinc-300'>
                        <img className='h-40 w-40 object-contain' src={product.image} alt={product.name} />
                    </div>

                    <div className='p-4 space-y-3'>
                       <h2 className='text-2xl font-semibold'>{product.name}</h2>
                       <p>{product.description}</p>
                       <div>${product.price}/month</div>
                       <button className='btn-w-full bg-purple-500 text-white rounded-lg mt-5hover:bg-purple-600'>Subscribe Now</button>
                    </div>
                </div> )}
             </div>

        </div>
    );
};

export default Products;
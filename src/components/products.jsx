import  { use } from 'react';
import ProductCard from './Productcard';

const Products = ({ productsPromise, carts, setCarts }) => {
    const products =use(productsPromise);
   


    return (
        <div className='py-20 max-w-7xl mx-auto px-5 space-y-10'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold '>Premium Digital Tools</h2>
                <p className='text-lg text-gray-600 p-4'>
                    Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
                </p>



            </div>
             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>

                {products.map((product) => (
                <ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts} />
            ))}
             </div>

        </div>
    );
};

export default Products;
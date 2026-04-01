
import { useState } from 'react'
import NavbarHero from './components/navbarHero'
import GetStarted from './components/GetStarted'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Products from './components/products'

import './App.css'
import Cart from './components/Cart'


  const getProducts = async () => {
    const res = await fetch('/products.json');
    return  res.json();
  };


  const productsPromise = getProducts();

  function App() {

    const [activeTab, setActiveTab] = useState ("products")
      const [carts, setCarts] = useState ([])

  return (
    <>
      <NavbarHero />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent ">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-50" aria-label="Products"  onClick={()=> setActiveTab("products")} defaultChecked/>
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-50" aria-label={`Cart (${carts.length})`} onClick={()=> setActiveTab("cart")} />
       </div>
      
      {activeTab === "products" && <Products productsPromise={productsPromise} key={productsPromise.id} carts={carts} setCarts={setCarts} />}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}

      <GetStarted />

      <Pricing />

      <Footer />


    </>
  )
}

export default App

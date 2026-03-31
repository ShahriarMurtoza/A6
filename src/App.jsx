
import NavbarHero from './components/navbarHero'
import GetStarted from './components/GetStarted'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Products from './components/products'

import './App.css'


  const getProducts = async () => {
    const res = await fetch('/products.json');
    return  res.json();
  };


  const productsPromise = getProducts();

  function App() {

  return (
    <>
      <NavbarHero />
      
      <Products productsPromise={productsPromise} key={productsPromise.id} />

      <GetStarted />

      <Pricing />

      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CartContainer from './components/CartContainer/CartContainer'
import Navbar from './components/Header/Navbar'

function App() {

  const [isActive,setIsActive] = useState({
    cart: true,
    status: "cart"
  })

  const [selectedProducts,setSelectedProducts] = useState([]);
  const [prices,setPrices] = useState(0);

  const handleSeletedProducts = product => {
    const isExist = selectedProducts.find(p=> p.id === product.id);

    if(isExist){
      alert("Already Exist");
    }
    else {
      const newProducts = [...selectedProducts,product];
      setSelectedProducts(newProducts);
    }

    const newPrice = prices + product.price;
    setPrices(newPrice);

  }


  const  handleIsActive = status => {
    if(status == 'cart'){
      setIsActive({
        cart: true,
        status: 'cart'
      })
    }
    else {
      setIsActive({
        cart: false,
        status: 'about'
      })
    }
  }

  const handleDeleteProduct = (id)=> {
   const newProducts = selectedProducts.filter(product=> product.id !== id);
   setSelectedProducts(newProducts);
   handleDeletePrice(id)

  }

  const handleDeletePrice = (id)=> {
    const product = selectedProducts.find(p=> p.id == id);
    setPrices(prices - product.price);
  }


 

  return (
    <>
     <Navbar selectedProducts={selectedProducts} prices={prices}/>
     <div className='flex justify-around font-medium mt-10'>
      <AllProducts handleSeletedProducts={handleSeletedProducts} prices={prices}/>
      <CartContainer handleIsActive={handleIsActive} isActive={isActive} selectedProducts={selectedProducts} handleDeleteProduct={handleDeleteProduct}/>
     </div>
    </>
  )
}

export default App

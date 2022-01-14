import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { useQuery } from 'react-query'

import Cart from './components/Cart'
import Storefront from './components/Storefront'
import CheckoutForm from './components/CheckoutForm'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const getFillerProducts = async () => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {

  const [cartItems, setCartItems] = useState([])
  const { data, isLoading, error } = useQuery(
    'products',
    getFillerProducts
  )
  console.log("data",data)
  console.log("cartItems",cartItems)

  

  const handleAddToCart = (clickedItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart) {
        return prev.map(
          item => item.id===clickedItem.id 
            ? { ...item, amount: item.amount + 1}
            : item
        )
      }
      return [...prev, { ...clickedItem, amount: 1}];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if(item.id === id) {
          if(item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount -1 }]
        } else {
          return [...ack, item];
        }
      }, []) 
    ))
  }



  if (isLoading) return <div>Almost..</div>
  if (error) return <div>Something Went Wrong...</div>

  return (
    <Routes>
      <Route path="/" element={
        <Storefront
          data={data}
          setCartItems={setCartItems}
        />
      }/>
      <Route path="cart" element={
        <Cart 
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      }/>
      <Route path="checkout" element={
        <CheckoutForm />
      }/>
    </Routes>
  );
}

export default App;

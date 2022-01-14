import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App';
import Storefront from './components/Storefront'
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'

const client = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}>
          <Route index element={<Storefront />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckoutForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


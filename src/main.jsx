import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  AllFood,
  Cart,
  Checkout,
  Contact,
  Error,
  Home,
  Layout,
  Login,
  PizzaDetails,
  Signup,
  store
} from './index'
import { RouterProvider } from 'react-router-dom'
import {
  Route, createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route path='/' element={<Home />} />
      <Route path='allFood' element={<AllFood />} />
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='pizzas/:id' element={<PizzaDetails />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import products from "./assets/fake-data/products";
import CartItem from "./components/cart/CartItem";
import Carts from "./components/cart/Carts";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductCart from "./components/productCard/ProductCard";
import Layout from "./layouts/Layout";
import AllFood from "./pages/allFood/AllFood";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import PizzaDetails from "./pages/foodDetails/FoodDetails";
import Pizzas from "./pages/pizzas/Pizzas";
import store from "./store/store";
import styles from "./style";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";






export {
    Login, 
    Signup,
    AllFood,
    CartItem,
    Contact,
    Carts,
    ProductCart,
    Container,
    styles,
    Cart,
    Checkout,
    Home,
    PizzaDetails,
    Pizzas,
    Header,
    Footer,
    Layout,
    Error,
    products,
    store
}
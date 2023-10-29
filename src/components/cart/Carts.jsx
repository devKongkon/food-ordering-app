import { Link } from 'react-router-dom';
import { CartItem, Container } from '../../index'
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/shoppingCart/cartUiSlice';



function Carts() {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems)
    // console.log(cartProducts)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const toggleCart = () => {
        dispatch(toggle())
    }

    return (
        <Container>
            <section className='relative z-[2] duration-200 '>
                <section className='w-[230px] h-full bg-gray-50 text-black  
                right-0 fixed pt-4 overflow-y-auto'>
                    <div>
                        <span>
                            <RiCloseLine
                                onClick={toggleCart}
                                className='text-3xl cursor-pointer ml-2 mb-2 text-white rounded-full font-bold bg-black'
                            />
                        </span>
                    </div>

                    {
                        cartProducts.length === 0 ?
                            <h1 className='text-center text-base font-bold text-red-700 pl-4'>No item added to the cart</h1>
                            :
                            cartProducts?.map((item, id) => (
                                <CartItem
                                    item={item}
                                    key={id}
                                />
                            ))
                    }

                    <div
                        className='bg-gray-200 w-full flex items-center py-6  px-2 gap-x-6 pl-4 mt-10 fixed bottom-0 '
                    >
                        <div>
                            <span className=' text-xl text-cyan-950 font-bold'>Subtotal</span>
                            <span className=' block text-xl font-bold'>${totalAmount}</span>
                        </div>
                        <div>
                            <Link
                                to='/checkout'>
                                <button className='bg-cyan-800 text-white px-3 py-1 rounded-full text-base font-semibold'>Checkout🤩</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </Container>
    )
}
export default Carts;

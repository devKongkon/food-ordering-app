import { useDispatch } from 'react-redux';
import { Container } from '../../index'
import { RiCloseLine, } from "react-icons/ri";
import { addItem, deleteItem, removeItem } from '../../store/shoppingCart/cartSlice';

function CartItem({ item }) {

    const dispatch = useDispatch();
    const { id, title, price, image01, quantity, totalPrice } = item;
    const increment = () => {
        dispatch(addItem({
            id,
            title,
            price,
            image01,
        }))
    }

    const decrement = () => {
        dispatch(removeItem(id))
    }

    const deleteCartProduct = () => {
        dispatch(deleteItem(id))
    }

    return (
        <Container>
            <section className='flex items-center justify-between z-50 mb-6 overflow-y-auto'>
                <div>
                    <img src={image01} className='w-14' alt="" />
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div>
                        <h1 className=' text-base font-semibold text-center'>{title}</h1>
                    </div>
                    <div className='flex justify-center gap-5'>
                        <span className=' text-xl'>{quantity}x</span>
                        <span className=' text-xl'>${totalPrice}</span>
                    </div>
                    <div className='flex gap-x-5 bg-cyan-700 text-white justify-center px-4 py-0'>
                        <span
                            onClick={decrement}
                            className=' text-xl cursor-pointer'>
                            -
                        </span>
                        <span className=' text-xl '>
                            {quantity}
                        </span>
                        <span
                            onClick={increment}
                            className=' text-xl cursor-pointer'>
                            +
                        </span>
                    </div>
                </div>
                <span
                    className='font-bold text-xl text-red-800 cursor-pointer'
                    onClick={deleteCartProduct}
                >
                    <RiCloseLine />
                </span>
            </section>
        </Container>
    )
}

export default CartItem;

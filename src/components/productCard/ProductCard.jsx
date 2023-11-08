import { Link } from 'react-router-dom';
import { } from '../../index'
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/shoppingCart/cartSlice';
function ProductCard(props) {
    const { id, title, image01, price } = props.item;
    const dispatch = useDispatch();
    
    const addToCart = () => {
        dispatch(addItem({
            id,
            title,
            image01,
            price
        }))
    }
    
    return (
        <section>
            <div className='text-center py-6 duration-300'>
                <Link to={`/pizzas/${id}`}>
                    <img
                        src={image01}
                        className='w-32 mx-auto hover:scale-110 duration-500'
                    />
                </Link>
                <Link to={`/pizzas/${id}`}>
                    <span className='block py-2 md:text-xl'>{title}</span>
                </Link>
                <span className='font-semibold'>${price}</span>
                <button
                    onClick={addToCart}
                    className='mx-auto text-white text-center block bg-cyan-900 px-4 py-2 mt-1 cursor-pointer rounded-full duration-500 transition transform hover:translate-y-1'
                >
                    Add to cart
                </button>
            </div>
        </section>
    )
}

export default ProductCard;


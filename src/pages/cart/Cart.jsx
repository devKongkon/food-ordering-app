import { useDispatch, useSelector } from "react-redux";
import { Container } from '../../index'
import { removeItem } from "../../store/shoppingCart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  // console.log(cartItems)
  const removeCartPageItem = (id) => {
    dispatch(removeItem(id))
  }


  return (
    <section>
      <Container>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Image</th>
                  <th className="py-3 px-6">Product Title</th>
                  <th className="py-3 px-6">Quantity</th>
                  <th className="py-3 px-6">Price</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {
                  cartItems.length === 0 ? <h1 className="text-xl text-center mx-auto font-semibold py-4 text-red-700">Your cart is empty. Please add  to cart</h1> :
                    cartItems.map(({ id, title, image01, quantity, price }) => (
                      <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img
                            className="w-20"
                            src={image01} alt=""
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{title}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{quantity}X</td>
                        <td className="px-6 py-4 whitespace-nowrap">${price}</td>
                        <td className="text-right px-6 whitespace-nowrap">

                          <button
                            onClick={() => removeCartPageItem(id)}
                            href="javascript:void()"
                            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
          <div>
            <div className="mt-10 bg-cyan-700 text-white py-4 px-4">
              <span className="font-bold">Subtotal</span> : <span className=""> ${totalAmount}</span>
            </div>
            <div className="py-4">
              <p>Taxes and shipping will calculate at checkout</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <Link>
              <button
                className="bg-cyan-600 px-4 py-1 text-white font-semibold rounded-sm"
              >
                Continue Shopping
              </button>
            </Link>
            <Link to='/checkout'>
              <button
                className="bg-cyan-600 px-4 py-1 text-white font-semibold rounded-sm"
              >
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default Cart;

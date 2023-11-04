import { useParams } from 'react-router-dom';
import { Container, ProductCart, products } from '../../index'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/shoppingCart/cartSlice';


function FoodDetails() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((product) => product.id === id)
  const [reviewMsg, setReviewMsg] = useState('');
  const [reviewMail, setReviewMail] = useState('');
  const [reviewName, setReviewName] = useState('')
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const { title, price, category, desc, image01 } = product;
  const [previewImage, setPreviewImage] = useState(product.image02);
  const relatedProducts = products.filter((item) => category === item.category)

  const addCart = () => {
    dispatch(addItem({
      id,
      title,
      price,
      image01,
    }))
  }

  const reviewHandleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name: reviewName,
      email: reviewMail,
      message: reviewMsg,
    }
    setSubmittedReviews([...submittedReviews, newReview])

    setReviewName("");
    setReviewMail("");
    setReviewMsg("")
  }

  useEffect(() => {
    setPreviewImage(product.image01)
  }, [product])

  return (
    <section>
      <Container>
        <div className='mt-6'>
          <div>
            <img
              className='w-36 mx-auto'
              src={previewImage}
              alt=""
            />
          </div>
          {/* single product image view */}
          <div className='flex justify-center space-x-6 border-b-2 mt-6 pb-4'>
            <div>
              <img
                className='w-24 animate-pulse duration-300 cursor-pointer'
                onClick={() => setPreviewImage(product.image01)}
                src={product.image01}
                alt="product-image"
              />
            </div>
            <div>
              <img
                className='w-24 cursor-pointer'
                onClick={() => setPreviewImage(product.image02)}
                src={product.image02}
                alt="product-image"
              />
            </div>
            <div>
              <img
                className='w-24 cursor-pointer'
                onClick={() => setPreviewImage(product.image03)}
                src={product.image03}
                alt="product-image"
              />
            </div>
          </div>
          {/* product description */}
          <div className='mt-2'>
            <h1 className='text-center text-xl font-semibold'>
              {title}
            </h1>
            <div className='flex justify-center space-x-6 my-6'>
              <div className='font-semibold'>
                Category : <span className='font-bold'>{category}</span>
              </div>
              <div className='font-semibold '>
                Price : <span className='font-bold'>${price}</span>
              </div>
            </div>
            <button
              onClick={addCart}
              className='mx-auto text-base text-white text-center block bg-cyan-700 px-4 py-1 my-6 cursor-pointer rounded-full duration-500 transition transform hover:translate-y-1 '
            >
              Add to cart
            </button>
          </div>
          {/* Tab section with review */}
          <div>
            <Tabs className=''>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Review</Tab>
              </TabList>

              <TabPanel>
                <p>{desc}</p>
              </TabPanel>
              <TabPanel>
                <main className="w-full flex bg-gray-50">
                  <div className="flex-1 flex items-center justify-center ">
                    <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                      <div
                        className=" "
                      >
                        <h1 className=' text-cyan-800 font-semibold text-xl'>This product is very nice!!</h1>
                        <p className='mb-4 font-medium'>Robert Bruce</p>
                        {
                          submittedReviews.map((review, index) => (
                            <section key={index}>
                              <h1 className=' text-cyan-800 font-semibold text-xl'>{review.message}</h1>
                              <p className='font-medium'>{review.name}</p>
                            </section>
                          ))
                        }
                      </div>
                      <form
                        onSubmit={reviewHandleSubmit}
                        className="space-y-5 "
                      >
                        <div>
                          <label className="font-medium">
                            Name
                          </label>
                          <input
                            onChange={(e) => setReviewName(e.target.value)}
                            value={reviewName}
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          />
                        </div>
                        {/* <div>
                          <label className="font-medium">
                            Email
                          </label>
                          <input
                            onChange={(e) => setReviewMail(e.target.value)}
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                          />
                        </div> */}
                        <div>
                          <textarea
                            value={reviewMsg}
                            onChange={(e) => setReviewMsg(e.target.value)}
                            className='text-black  w-full bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg p-4'
                            placeholder='Write your review'
                            cols="20"
                            rows="5">

                          </textarea>
                        </div>
                        <button
                          className="w-full px-4 py-2 text-white font-medium bg-cyan-700 rounded-md"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </main>
              </TabPanel>
            </Tabs>
          </div>
          {/*Related product */}
          <div className='mt-12'>
            <h1 className='font-semibold text-2xl text-center py-4 border-b-2'>More testy product, you might also like..</h1>

            <div className='grid grid-cols-2'>
              {relatedProducts.map((item) => (
                <ProductCart
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FoodDetails;

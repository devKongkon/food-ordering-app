import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../components/styles/swiper.css'
import {
  Container,
  ProductCart,
  products,
} from '../../index'

function Home() {
  const [category, setCategory] = useState("ALL")
  const [allProducts, setAllProducts] = useState(products)
  const [hotPizza, setHotPizza] = useState([]);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const filteredHotPizza = products.filter(item => item.category === "Pizza")
    const slicePizza = filteredHotPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products)
    }

    if (category === "BURGER") {
      const filterProducts = products.filter(item => item.category === "Burger")
      setAllProducts(filterProducts)
    }

    if (category === "PIZZA") {
      const filterProducts = products.filter(item => item.category === "Pizza")
      setAllProducts(filterProducts);
    }

    if (category === "BREAD") {
      const filterProducts = products.filter(item => item.category === "Bread")
      setAllProducts(filterProducts)
    }
  }, [category]);

  return (
    <section>
      <section className='bg-black-gradient'>
        <Container>
          {/* Hero banner */}
          <section>
            <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
              <div className="relative mx-auto max-w-2xl py-10">
                <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
                  <svg
                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
                    Craving Satisfaction? Just Wait.
                    Delicious Pizzas & Burgers, Right at Your Doorstep!
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                    commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-2">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      View Docs
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Tab button */}
          <div className=' text-black border-b'>
            <ul className='flex flex-wrap justify-center gap-x-2 cursor-pointer my-6 font-semibold md:gap-x-20'>
              <li
                className={`${category === "ALL" ? 'bg-cyan-900 text-white rounded-lg' : ''} px-4 py-1 duration-700 z-10`}
                onClick={() => setCategory("ALL")}
              >
                All
              </li>
              <li

                className={`${category === "BURGER" ? 'bg-cyan-900 text-white rounded-lg' : ''}  px-4 py-1 duration-700 z-50`}
                onClick={() => setCategory("BURGER")}
              >
                Burger
              </li>
              <li
                className={`${category === "PIZZA" ? 'duration-700 bg-cyan-900 text-white' : ''} px-4 py-1 duration-300 rounded-lg`}
                onClick={() => setCategory("PIZZA")}
              >
                Pizza
              </li>
              <li
                className={`${category === "BREAD" ? 'bg-cyan-900 text-white' : ''} px-4 py-1  rounded-lg duration-700`}
                onClick={() => setCategory("BREAD")}
              >
                Bread
              </li>
            </ul>
          </div>
          {/* Tab related product */}
          <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 justify-center duration-300 items-center '>
            {allProducts.map((item, id) => (
              <ProductCart
                key={id}
                item={item}
              />
            ))}
          </div>
          {/*Hot pizzas section */}
          <div className='my-20'>
            <div className="relative ">
              <span className="block  h-px bg-gray-300"></span>
              <p className="inline-block w-fit  font-semibold bg-white px-2 absolute -top-4 inset-x-0 mx-auto text-2xl">Hot Pizzas</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 justify-center items-center mt-14'>
              {hotPizza.map((item) => (
                <ProductCart
                  item={item}
                  key={item.id}
                />
              ))}
            </div>
          </div>
          {/*Swiper Slider section*/}
          {/* <section>
            <Swiper
              spaceBetween={5}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="h-[300px] w-[500px] text-black"
            >
              <SwiperSlide className='px-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in placeat quibusdam officiis quos, esse sunt ab numquam laborum beatae.
              </SwiperSlide>
              <SwiperSlide className='px-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in placeat quibusdam officiis quos, esse sunt ab numquam laborum beatae.
              </SwiperSlide>
              <SwiperSlide className='px-10 items-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in placeat quibusdam officiis quos, esse sunt ab numquam laborum beatae.
              </SwiperSlide>

              <div className="autoplay-progress" slot="container-end">
                <svg className='' viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </section> */}
        </Container>
      </section>
    </section>
  )
}

export default Home;

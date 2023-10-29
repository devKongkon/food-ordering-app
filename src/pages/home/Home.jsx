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
            <div></div>
            <div>img</div>
          </section>
          {/* Tab button */}
          <div className=' text-black border-b'>
            <ul className='flex flex-wrap justify-center gap-x-2 cursor-pointer my-6 font-semibold md:gap-x-20'>
              <li
                className={`${category === "ALL" ? 'bg-cyan-900 text-white rounded-lg' : ''} px-4 py-1 duration-700`}
                onClick={() => setCategory("ALL")}
              >
                All
              </li>
              <li

                className={`${category === "BURGER" ? 'bg-cyan-900 text-white rounded-lg' : ''}  px-4 py-1 duration-700`}
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
          <div className='mt-20'>
            <h1 className='text-center text-3xl font-bold uppercase mb-3  p-2'><span className='border-l-2 p-2 before:hover:'>Hot pizzas</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 justify-center items-center '>
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

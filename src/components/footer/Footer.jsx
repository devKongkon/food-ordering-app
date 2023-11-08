import { NavLink } from "react-router-dom";
import { Container } from "../../index"
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {

  return (
    <footer className="bg-slate-100 pt-10">
      <Container>
        <section
          className="py-10 grid grid-cols-1 gap-y-4 sm:grid sm:grid-cols-2 md:grid-cols-4 md:gap-x-2 md:grid md:justify-items-center"
        >
          <div>
            <NavLink className={`font-bold`}>
              <span className="text-3xl text-cyan-900">SliceBite</span>
              <p className="text-base font-semibold">This is pizzas and burger shop</p>
            </NavLink>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Delivery Time</h1>
            <p className="font-semibold">All day</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Contact</h1>
            <p className="font-semibold">Location: Narail, Sadar, Bangladesh</p>
            <p className="font-semibold">Phone: 01916814834</p>
            <p className="font-semibold">Email: developerkongkon@gmail.com</p>
          </div>
          <div className="sm:overflow-hidden">
            <h1 className="text-2xl font-bold">Newsletter</h1>
            <p className="py-1 font-semibold">Subscribe our newsletter</p>
            <input
              className="border-2 py-1 px-4 sm:w-44"
              type="email"
              placeholder="Enter your mail"
            />
          </div>
        </section>
      </Container>
      <div className="flex items-center justify-between py-4 gap-x-2 w-full max-w-7xl mx-auto px-4 ">
        <p className="text-black text-base">Copyright 2023, developed by Kongkon. All right reserved.</p>
        <div className="flex flex-col items-center text-2xl gap-x-2">
          <p className="text-base font-bold">Follow</p>
          <div className="flex gap-x-2">
            <BsFacebook
              className="text-cyan-900 hover:scale-125 duration-500"
            />
            <BsGithub
              className="text-cyan-900 hover:scale-125 duration-500"
            />
            <BsInstagram
              className="text-cyan-900 hover:scale-125 duration-500"
            />
            <BsLinkedin
              className="text-cyan-900 hover:scale-125 duration-500"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

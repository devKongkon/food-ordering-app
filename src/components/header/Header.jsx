import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { Container } from "../../index"
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/shoppingCart/cartUiSlice";
import { navLinks } from "../../constants";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const totalCartItemsQuantity = useSelector(state => state.cart.totalCartItemsQuantity)

  const menuRef = useRef(null);
  const toggleMenu = () => {
    menuRef.current.classList.toggle('block');
    setIsMobileMenuOpen(false);
  };

  const toggleCart = () => {
    dispatch(toggle())
  }


  return (

    <header className="shadow sticky py-4 px-4 top-0 z-50 bg-slate-50 text-black mx-auto">
      <Container>
        <nav className="flex justify-between py-4 items-center">
          <div>
            <NavLink className={`font-bold`}>
              Logo
            </NavLink>
          </div>

          <div className="hidden md:block" ref={menuRef}>
            <ul className="flex space-x-10 justify-center">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                >
                  <NavLink
                    onClick={toggleMenu}
                    className={({ isActive }) => `${isActive ? "text-red-400" : ""}`}
                    to={`${nav.path}`}
                  >
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-6  relative items-center">
            <span className="text-2xl">
              <FiUser />
            </span>
            <div className="cursor-pointer relative">
              <BsCart2
                className="font-bold text-2xl"
                onClick={toggleCart}
              />
              <span
                onClick={toggleCart}
                className="absolute bg-red-500 -top-[18px] px-2 -right-3 rounded-full text-white  cursor-pointer"
              >
                {totalCartItemsQuantity}
              </span>
            </div>

            {/* mobile hamburger icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen((pre) => !pre)}
                className="text-2xl font-bold"
              >
                {
                  isMobileMenuOpen ? (<RiCloseLine />) : (<RiMenu3Fill />)
                }
              </button>
            </div>
          </div>
          {/* Mobile menu start Here */}
          <div className={`${isMobileMenuOpen ? "flex" : "hidden"} absolute right-0 flex-col top-[86px] w-full mx-auto text-center sidebar bg-gray-50 font-semibold py-5`}>
            <div>
              <ul className="">
                {navLinks.map((nav) => (
                  <li
                    className="py-2"
                    key={nav.id}
                  >
                    <NavLink
                      onClick={toggleMenu}
                      className={({ isActive }) => `${isActive ? "text-red-400" : ""}`}
                      to={`${nav.path}`}
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header >
  )
}

export default Header;

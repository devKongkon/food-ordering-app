import { Outlet } from 'react-router-dom';
import { Carts, Footer, Header } from '../index'
import { useSelector } from 'react-redux';

function Layout() {
    const showCart = useSelector(state => state.cartUi.cartIsVisible)

    return (
        <>
            <Header />
            {
                showCart && <Carts />
            }
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Layout;

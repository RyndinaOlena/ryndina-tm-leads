import { Outlet, Link } from 'react-router-dom';
import Header from '../pages/sections/Header';
import Footer from '../pages/sections/Footer';

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;

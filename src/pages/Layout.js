import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </>
    );
}

export default Layout;

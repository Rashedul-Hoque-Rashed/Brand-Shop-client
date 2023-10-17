import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.jpg"

const Navbar = () => {

    const links = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-pink-500 font-bold" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/add_products"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-pink-500 font-bold" : ""
            }
        >
            Add Products
        </NavLink></li>
        <li><NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-pink-500 font-bold" : ""
            }
        >
            My Cart
        </NavLink></li>

    </>

    return (
        <div className="bg-base-300 font-sans">
            <div className="navbar container mx-auto px-2 md:px-6 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 gap-6 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="h-10 md:h-14 w-10 md:w-14 rounded-full" src={logo} alt="" />
                <p className="text-xl md:text-2xl font-bold font-serif text-stone-700">Glamour</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-6 font-semibold px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn normal-case px-6 text-white bg-pink-500 hover:bg-pink-600">Login</Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
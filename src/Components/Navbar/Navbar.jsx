import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.jpg"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const Navigate = useNavigate();

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem("theme") : "light");

    const handelToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    const handelLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Log out successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate('/');
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
    }


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
                            <li className="flex items-center gap-2">
                                {
                                    user && <div className="items-center flex">
                                        <img className="w-6 h-6 mr-2 rounded-full" src={user.photoURL} alt="" />
                                        <p className="text-xs font-semibold">{user.displayName}</p>

                                    </div>
                                }
                                <label className="swap swap-rotate border-pink-500 border px-1 rounded-full">
                                    <input onChange={handelToggle} type="checkbox" checked={theme === "light" ? false : true} />
                                    <svg className="swap-on fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                    <svg className="swap-off fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                </label>
                            </li>
                            <li>

                            </li>
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="h-10 md:h-14 w-10 md:w-14 rounded-full" src={logo} alt="" />
                        <p className="text-xl md:text-2xl font-bold font-serif text-stone-500">Glamour</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-6 font-semibold px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-2 md:gap-4">
                    <label className="swap swap-rotate hidden md:flex border-pink-500 border px-2 py-1 rounded-full">
                        <input onChange={handelToggle} type="checkbox" checked={theme === "light" ? false : true} />
                        <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                    <div className="flex gap-2 items-center">
                        <div className="mr-2">
                            {
                                user && <div className="items-center hidden md:flex">
                                    <p className="font-bold md:mr-1 mr-2">{user.displayName}</p>
                                    <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                                </div>
                            }
                        </div>
                        {
                            user ? <button onClick={handelLogOut} className="btn normal-case text-white bg-pink-500 hover:bg-pink-600">Log out</button>
                                : <Link to="/login" className="btn normal-case text-white bg-pink-500 hover:bg-pink-600">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
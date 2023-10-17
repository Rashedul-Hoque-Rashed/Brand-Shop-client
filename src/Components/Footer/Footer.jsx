import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../../assets/Images/logo.jpg"


const Footer = () => {
    return (
        <footer className="bg-base-300 mt-20 pt-10">
            <div className="container mx-auto px-2 md:px-6">
                <div className="grid grid-cols-2 text-center md:grid-cols-4">
                    <h4 className="text-lg font-bold font-sans uppercase">About Us</h4>
                    <h4 className="text-lg font-bold font-sans uppercase">Our Team</h4>
                    <h4 className="text-lg font-bold font-sans uppercase">FAQ</h4>
                    <h4 className="text-lg font-bold font-sans uppercase">Contact</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-44 gap-6 items-center justify-between my-20">
                    <div>
                        <div className="flex items-center gap-2">
                            <BsTelephone className='w-4 h-4' />
                            <p className="text-sm text-slate-500 font-sans">+123 488 9652</p>
                        </div>
                        <div className="flex items-center gap-2 my-3">
                            <CiLocationOn className='w-4 h-4' />
                            <p className="text-sm text-slate-500 font-sans">25 West 21th Street, Miami FL, USA</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineMail className='w-4 h-4' />
                            <p className="text-sm text-slate-500 font-sans">info@glamour.com</p>
                        </div>
                    </div>
                    <div>
                        <img className="h-10 md:h-14 w-10 md:w-14 rounded-full mx-auto" src={logo} alt="" />
                        <p className="text-xl md:text-2xl font-bold font-serif text-stone-700 my-3 text-center">Glamour</p>
                        <div className="flex items-center justify-center gap-3">
                            <FaFacebook className='w-6 h-6' />
                            <FaInstagram className='w-6 h-6' />
                            <FaTwitter className='w-6 h-6' />
                        </div>
                    </div>
                    <div className='md:text-end'>
                        <p className='text-sm text-slate-500 font-sans'>Our formulas are made with natural, organic, and cruelty-free ingredients that are gentle, effective, and good for you and the environment.</p>
                    </div>
                </div>
                <div className="text-center">
                    <aside>
                        <p className='text-xs text-slate-500 font-sans'>Copyright © 2023 - All right reserved by Glamour</p>
                    </aside>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
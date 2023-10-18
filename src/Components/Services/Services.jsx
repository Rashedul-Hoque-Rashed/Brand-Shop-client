import { LiaShippingFastSolid, LiaCoinsSolid } from 'react-icons/lia';
import { MdSupportAgent } from 'react-icons/md';

const Services = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 my-12 md:my-28 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
            <div className="text-center">
                <LiaShippingFastSolid className='w-10 h-10 mx-auto text-pink-500' />
                <h4 className="text-xl lg:text-2xl font-bold font-serif text-stone-500 my-4">FREE SHIPPING</h4>
                <p className='text-xs lg:text-sm text-slate-500 font-sans'>
                Enjoy free shipping on all orders - no minimum purchase required.
                </p>
            </div>
            <div className="text-center">
                <MdSupportAgent className='w-10 h-10 mx-auto text-pink-500' />
                <h4 className="text-xl lg:text-2xl font-bold font-serif text-stone-500 my-4">24/7 SUPPORT</h4>
                <p className='text-xs lg:text-sm text-slate-500 font-sans'>
                Our team is available 24/7 to help with any questions or concerns.
                </p>
            </div>
            <div className="text-center">
                <LiaCoinsSolid className='w-10 h-10 mx-auto text-pink-500' />
                <h4 className="text-xl lg:text-2xl font-bold font-serif text-stone-500 my-4">MONEY BACK</h4>
                <p className='text-xs lg:text-sm text-slate-500 font-sans'>
                We offer a 100% money-back guarantee for your satisfaction.
                </p>
            </div>
        </div>
    );
};

export default Services;
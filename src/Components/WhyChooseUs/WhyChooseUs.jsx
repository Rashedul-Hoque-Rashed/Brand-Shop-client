import { BiLeaf } from 'react-icons/bi';
import { AiOutlineCrown } from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';

const WhyChooseUs = () => {
    return (
        <div className="container mx-auto px-2 md:px-6 my-12 md:my-28 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
            <div className="text-center">
                <BiLeaf className='w-10 h-10 mx-auto text-pink-500' />
                <h4 className="text-xl lg:text-2xl font-bold font-serif text-stone-500 my-4">ALL NATURAL</h4>
                <p className='text-xs lg:text-sm text-slate-500 font-sans'>
                    We are committed to using only the best natural ingredients in our products. We believe that nature has everything we need to nourish and care for our skin.
                </p>
            </div>
            <div className="text-center">
                <AiOutlineCrown className='w-10 h-10 mx-auto text-pink-500' />
                <h4 className="text-xl lg:text-2xl font-bold font-serif text-stone-500 my-4">TOP QUALITY</h4>
                <p className='text-xs lg:text-sm text-slate-500 font-sans'>
                    We believe that quality is key when it comes to beauty products. That is why we only use top-quality ingredients in our products and hold our products to the highest standards.
                </p>
            </div>
            <div className="text-center">
                <BsCashCoin className='w-10 h-10 mx-auto text-pink-500' />
                <h4 className="text-xl lg:text-2xl font-bold font-serif text-stone-500 my-4">10% CASHBACK</h4>
                <p className='text-xs lg:text-sm text-slate-500 font-sans'>
                    We are excited to offer our customers cashback on their purchases. For every $150 amount spent, you wll receive 10% cashback.
                </p>
            </div>
        </div>
    );
};

export default WhyChooseUs;
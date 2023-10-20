import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("https://brand-shop-server-l4dzthp9i-rashedul-hoques-projects.vercel.app/categories")
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="container mx-auto px-2 md:px-6 my-12 md:my-28">
            <h4 className="text-2xl md:text-4xl text-center font-bold font-serif text-stone-500 mb-10">Products Brand</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    brands.map(brand => <Link to={`/products/${brand.brand_name}`} key={brand.id} className="border rounded-lg p-4 shadow-xl">
                        <div className="w-full h-40 mx-auto bg-stone-200 rounded-xl">
                        <img className="p-4 h-36 mx-auto" src={brand.brand_img} alt="" />
                        </div>
                        <h4 className="text-center text-4xl font-sans font-bold my-3">{brand.brand_name}</h4>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Brands;
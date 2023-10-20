import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";


const Products = () => {


    const products = useLoaderData();

    return (
        <div className="container mx-auto px-2 md:px-6 my-12 md:my-28">

            {
                products.length === 0 ? <p className="text-4xl text-center font-bold font-serif text-stone-500 my-40  md:my-60">
                    Sorry, there was no products!!
                </p> :
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                        {
                            products.map(product => <div key={product._id}>
                                <div className="flex flex-col lg:flex-row gap-6 lg:items-center shadow-lg rounded-lg p-4">

                                    <img className="w-full lg:w-56 h-60 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none mx-auto" src={product.photo} alt="" />

                                    <div className="flex-1">
                                        <h4 className="font-bold font-serif text-stone-500">{product.name}</h4>
                                        <p className="text-slate-500 text-sm font-sans mt-1">{product.brandName} || {product.type}</p>
                                        <div className="flex items-center gap-2 mt-1 font-sans">
                                            <Rating
                                                initialRating={product.rating}
                                                emptySymbol={<AiOutlineStar className="text-orange-300 w-4 h-4" />}
                                                fullSymbol={<AiFillStar className="text-orange-300 w-4 h-4" />}
                                            ></Rating>
                                            <p className="text-slate-500 text-sm mb-1">{product.rating}</p>
                                        </div>
                                        <h4 className="my-4 text-slate-500 text-lg font-semibold font-sans"><span className="font-bold text-xl">Price:</span> {product.price}$</h4>
                                        <div className="flex font-sans items-center gap-2">
                                            <Link to={`/details/${product._id}`} className="btn font-sans normal-case px-4 md:px-6 text-white bg-pink-500 hover:bg-pink-600">Details</Link>
                                            <Link to={`/update/${product._id}`} className="btn font-sans normal-case px-4 md:px-6 text-white bg-blue-500 hover:bg-blue-600">Update</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;
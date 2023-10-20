import { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowLeft, BsCartPlus } from "react-icons/bs";
import Rating from "react-rating";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Details = () => {

    const { user } = useContext(AuthContext);
    const Navigate = useNavigate();

    const details = useLoaderData();
    const { name, brandName, type, descriptions, price, rating, photo } = details;
    const { metadata } = user;
    const {createdAt} = metadata
    console.log(createdAt)
    const cart = { createdAt , name, brandName, type, descriptions, price, rating, photo }

    const handelCart = () => {
        fetch(`https://brand-shop-server-l4dzthp9i-rashedul-hoques-projects.vercel.app/cart`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Add to cart successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'This product is already add to cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className="container mx-auto px-2 md:px-6 my-8">
            <button className="flex gap-2 items-center text-lg font-bold mb-6 border-2 px-3 py-2 rounded-lg border-pink-500" onClick={() => Navigate(-1)}>
                <BsArrowLeft className="w-4 h-4" /> Back
            </button>
            <img className="md:w-[600px] md:h-[600px] mx-auto rounded-lg" src={details.photo} alt="" />
            <div className="flex gap-4 items-center">
                <h4 className="text-4xl font-bold font-serif text-stone-500 mt-6">{details.name}</h4>
                <button onClick={handelCart}><BsCartPlus className="w-10 h-10 mt-6 text-pink-500" /></button>
            </div>
            <p className="text-slate-500 text-sm font-sans mt-1">{details.brandName} || {details.type}</p>
            <div className="flex items-center gap-2 mt-1 font-sans  mb-6">
                <Rating
                    initialRating={details.rating}
                    emptySymbol={<AiOutlineStar className="text-orange-300 w-4 h-4" />}
                    fullSymbol={<AiFillStar className="text-orange-300 w-4 h-4" />}
                ></Rating>
                <p className="text-slate-500 text-sm mb-1">{details.rating}</p>
            </div>
            <p className="text-slate-500 text-lg font-sans mt-1 mb-6">{details.description}</p>

        </div>
    );
};

export default Details;
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {

    const carts = useLoaderData();
    const [products, setProducts] = useState(carts);

    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://brand-shop-server-l4dzthp9i-rashedul-hoques-projects.vercel.app/cart/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Product has been deleted to cart.',
                                    'success'
                                )
                                const remaining = products.filter(product => product._id !== id);
                                setProducts(remaining);
                            }
                        })
                }
            })
    }

    return (
        <div className="container mx-auto px-2 md:px-6 my-12 md:my-28">
            {
                products.length === 0 ? <p className="text-4xl text-center font-bold font-serif text-stone-500 my-40  md:my-60">
                    You do not added any products in you cart
                </p> : <div className="my-16">
                    {
                        products.map(product => <div className="shadow-lg rounded-lg p-2 md:p-6 my-10" key={product.id}>
                            <div className="flex md:items-center gap-6 flex-col md:flex-row">
                                <img className="w-full md:w-72 h-72 rounded-t-lg md:rounded-l-lg md:rounded-tr-none" src={product.photo} alt="" />
                                <div>
                                    <h4 className="text-2xl font-bold font-serif text-stone-500 mt-6">{product.name}</h4>
                                    <p className="text-slate-500 text-sm font-sans mt-1">{product.brandName} || {product.type}</p>
                                    <h4 className="my-4 text-slate-500 text-lg font-semibold font-sans"><span className="font-bold text-xl">Price:</span> {product.price}$</h4>
                                    <button onClick={() => handelDelete(product._id)} className="btn font-sans normal-case px-4 md:px-6 text-white bg-blue-500 hover:bg-blue-600">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            }
        </div>
    );
};

export default Cart;
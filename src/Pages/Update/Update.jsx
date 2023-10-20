import { BsArrowLeft } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Update = () => {

    const Navigate = useNavigate();
    const products = useLoaderData();
    const { _id, name, brandName, type, description, price, rating, photo} = products
    console.log(products)

    const handelUpdateProducts = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updateProducts = { name, brandName, type, description, price, rating, photo };

        fetch(`https://brand-shop-server-l4dzthp9i-rashedul-hoques-projects.vercel.app/update/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProducts)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }




    return (
        <div className="container mx-auto px-2 md:px-6 my-12 md:my-24">
            <button className="flex gap-2 items-center text-lg font-bold mb-6 border-2 px-3 py-2 rounded-lg border-pink-500" onClick={() => Navigate(-1)}>
                <BsArrowLeft className="w-4 h-4" /> Back
            </button>
            <h4 className="text-2xl md:text-4xl text-center font-bold font-serif text-stone-500 mb-10">Update Your Products</h4>
            <form onSubmit={handelUpdateProducts} className="md:w-4/5 lg:w-2/3 mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-500 ">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-slate-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Products Name" defaultValue={name} required />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="brandName" className="block mb-2 text-sm font-medium text-slate-500 ">Brand Name</label>
                        <select className='bg-gray-50 border border-gray-300 text-slate-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500' name="brandName" id="brandName" defaultValue={brandName} required>
                            <option value="">Select Brand</option>
                            <option value="Urban Decay">Urban Decay</option>
                            <option value="Revlon">Revlon</option>
                            <option value="Avon">Avon</option>
                            <option value="Coty">Coty</option>
                            <option value="Dior">Dior</option>
                            <option value="Chanel">Chanel</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 my-4">
                    <div className="flex-1">
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-slate-500 ">Type</label>
                        <input type="text" name="type" id="type" className="bg-gray-50 border border-gray-300 text-slate-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={type} placeholder="Type" required />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-slate-500 ">Description</label>
                        <input type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-slate-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" defaultValue={description} required />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 my-4">
                    <div className="flex-1">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-slate-500 ">Price</label>
                        <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-slate-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" defaultValue={price} required />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-slate-500 ">Rating</label>
                        <input type="text" name="rating" id="rating" className="bg-gray-50 border border-gray-300 text-slate-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" defaultValue={rating} required />
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-slate-500 ">Photo URL</label>
                    <input type="text" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-slate-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={photo} placeholder="Photo URL" required />
                </div>
                <input className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg w-full mt-6" type="submit" value="Update Products" />
            </form>
        </div>
    );
};

export default Update;
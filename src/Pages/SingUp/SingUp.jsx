import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const SingUp = () => {


    const { createUser, googleLogin, githubLogin } = useContext(AuthContext);

    const Navigate = useNavigate();

    const handelSingUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password)
        ) {
            Swal.fire({
                icon: 'error',
                title: "Password must be 6 characters, one uppercase and one spacial characters",
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        createUser(email, password, name, photo)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: `${name}`, photoURL: `${photo}`
                })
                console.log(res.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate('/')
                window.location.reload();
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

    const handelGoogle = () => {
        googleLogin()
        .then(res => {
            console.log(res.user);
            Swal.fire({
                icon: 'success',
                title: 'Login successful',
                showConfirmButton: false,
                timer: 2500
            })
            Navigate(location?.state ? location.state : "/");
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 2500
            });
        });
    }

    const handelGithub = () => {
        githubLogin()
        .then(res => {
            console.log(res.user);
            Swal.fire({
                icon: 'success',
                title: 'Login successful',
                showConfirmButton: false,
                timer: 2500
            })
            Navigate(location?.state ? location.state : "/");
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 2500
            });
        });
    }

    return (
        <div className="container mx-auto px-2 md:px-6 my-8 md:my-16 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <div className="flex justify-center gap-8">
                            <button onClick={handelGithub} className=""><BsGithub className="w-10 h-10 text-black" /></button>
                            <button onClick={handelGoogle} className=""><BsGoogle className="w-10 h-10 text-blue-500" /></button>
                        </div>
                        <p className="text-center font-bold">or</p>
                        <form onSubmit={handelSingUp} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                <input type="text" name="photo" id="photo" placeholder="Your Photo URL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-pink-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" href="#" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
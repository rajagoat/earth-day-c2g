import Link from 'next/link'
import Router from 'next/router';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'

export default function Signup() {
    const { dispatch } = useAuthContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [typeOfUser, setTypeOfUser] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            setError('Error: Passwords Mismatch');
        }
        if (!typeOfUser) {
            setError("Error: Please select what type of user you are.");
        }
        else {
            const user = {
                email,
                password,
                typeOfUser
            };
            const response = await fetch("http://localhost:4000/api/user/signup", {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            if (!response.ok) {
                setError("Error: " + json.error);
            } else {
                dispatch({type: 'LOGIN', payload: json})
                Router.push({
                    pathname: "/userinfo",
                    query:
                    {
                        typeOfUser,
                        _id: json._id
                    }
                });
            }
        }
    };

    return (
        <>
            <div className="flex h-screen bg-gray-50 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 mb-10">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://cdn.discordapp.com/attachments/1038532635263250502/1038945953903824977/gleanrlogo.png"
                            alt="Gleanr Logo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Create an account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Log In
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="-space-y-px rounded-md">
                            <div>
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="example@mail.com"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-2 mt-3">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-2 mt-3">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-2 mt-3">
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-700">I am a:</legend>
                                        <div className="mt-2 space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="Gleaner"
                                                    name="typeofuser"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    onChange={(e) => setTypeOfUser(e.target.id)}
                                                />
                                                <label htmlFor="Gleaner" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Gleaner
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="Farmer"
                                                    name="typeofuser"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    onChange={(e) => setTypeOfUser(e.target.id)}
                                                />
                                                <label htmlFor="Farmer" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Farmer
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="Food Bank Worker"
                                                    name="typeofuser"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    onChange={(e) => setTypeOfUser(e.target.id)}
                                                />
                                                <label htmlFor="Food Bank Worker" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Food Bank Worker
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Create Account
                            </button>
                        </div>
                        {error &&
                            <div>
                                {error}
                            </div>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
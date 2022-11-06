import Link from 'next/link'

export default function Signup() {
    return (
        <>
            <div className="flex h-screen bg-gray-50 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 mb-10">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
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
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
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
                                        />
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-2 mt-3">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                        />
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-2 mt-3">
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-700">I am a:</legend>
                                        <div className="mt-2 space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="gleaner"
                                                    name="typeofuser"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="gleaner" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Gleaner
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="farmer"
                                                    name="typeofuser"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="farmer" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Farmer
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="foodbankworker"
                                                    name="typeofuser"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="foodbankworker" className="ml-3 block text-sm font-medium text-gray-700">
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
                                // remember to uncomment this later
                                // type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                {/* Wrapping this in a link for now but needs authentication later*/}
                                <Link href="/userinfo">
                                    Create Account
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
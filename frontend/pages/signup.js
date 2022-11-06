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
                        <div className="-space-y-px rounded-md shadow-sm">
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
                                <div className="col-span-3 sm:col-span-2 mt-2">
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
                                <div className="col-span-3 sm:col-span-2 mt-2">
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
                                <div className="col-span-3 sm:col-span-2 mt-2">
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
                                <div className="col-span-3 sm:col-span-2 mt-2">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        I am a:
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option></option>
                                        <option>Gleaner</option>
                                        <option>Farmer</option>
                                        <option>Food Bank Worker</option>
                                    </select>
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
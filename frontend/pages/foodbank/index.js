import Link from "next/link";
import Navbar from "../../components/Navbar";
import GleaningActivities from "../../components/foodbankactivities";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-lg text-blueGray-700">Food Bank Pickups Information</h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Farmer Name</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Type of Produce</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Expected pick up date:</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Location</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Send Interest</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img src="https://demos.creative-tim.com/notus-nextjs/img/bootstrap.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                    <span className="ml-3 font-bold NaN">Farm Name(25 lbs): We have some fresh fruits to offer all</span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">21st Nov, 2022</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-orange-500 mr-2"></i> Active
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-orange-500 mr-2"></i> H0H - H9X, Montreal 
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <div className="inline-flex rounded-md shadow">
                                            <a
                                            href="foodbank/confirmpickup"
                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                                            >
                                            Confirm Pickup 
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <Link className="text-blueGray-500 py-1 px-3" href="#pablo">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Link>
                                    <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" style={{position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(-108px, 414px)"}} data-popper-placement="left-start">
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</Link>
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</Link>
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img src="https://demos.creative-tim.com/notus-nextjs/img/angular.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                    <span className="ml-3 font-bold NaN">Farm Name(50 lbs): We are having fresh Vegiies and fruits to offer most welcome to pick up.</span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">14th Nov, 2022</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-emerald-500 mr-2"></i> Active
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-orange-500 mr-2"></i> H0H - H9X, Montreal 
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <div className="inline-flex rounded-md shadow">
                                            <a
                                            href="foodbank/confirmpickup"
                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                                            >
                                            Confirm Pickup 
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <Link className="text-blueGray-500 py-1 px-3" href="#pablo">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Link>
                                    <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" style={{position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(-108px, 494px)"}} data-popper-placement="left-start">
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</Link>
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</Link>
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img src="https://demos.creative-tim.com/notus-nextjs/img/sketch.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                    <span className="ml-3 font-bold NaN">Farm Name(75 lbs): Fresh Tomatos avalable</span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">24th Nov, 2022</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-red-500 mr-2"></i> Active
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-orange-500 mr-2"></i> H0H - H9X, Montreal 
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <div className="inline-flex rounded-md shadow">
                                            <a
                                            href="foodbank/confirmpickup"
                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                                            >
                                            Confirm Pickup 
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <Link className="text-blueGray-500 py-1 px-3" href="#pablo">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Link>
                                    <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48">
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</Link>
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another action</Link>
                                        <Link href="#pablo" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something else here</Link>
                                    </div>
                                </td>
                            </tr>
                            </tbody> */}
                        <GleaningActivities/>
                    </table>
                </div>

                
            </div>
        </div>
    );
}

export default Home;
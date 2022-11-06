import Link from "next/link";
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-lg text-blueGray-700">Card Tables</h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Project</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Budget</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Status</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Users</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">Completion</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img src="https://demos.creative-tim.com/notus-nextjs/img/bootstrap.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                    <span className="ml-3 font-bold NaN">Argon Design System</span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$2,500 USD</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-orange-500 mr-2"></i> pending
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">60%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500" style={{width: "60%"}}></div>
                                            </div>
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
                                    <span className="ml-3 font-bold NaN">Angular Now UI Kit PRO</span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$1,800 USD</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-emerald-500 mr-2"></i> completed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">100%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500" style={{width: "100%"}}></div>
                                            </div>
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
                                    <span className="ml-3 font-bold NaN">Black Dashboard Sketch</span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$3,150 USD</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-red-500 mr-2"></i> delayed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">73%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500" style={{width: "73%"}}></div>
                                            </div>
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
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img src="https://demos.creative-tim.com/notus-nextjs/img/react.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                    <span className="ml-3 font-bold NaN">React Material Dashboard</span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$4,400 USD</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-teal-500 mr-2"></i> on schedule
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">90%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500" style={{width: "90%"}}></div>
                                            </div>
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
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img src="https://demos.creative-tim.com/notus-nextjs/img/vue.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                    <span className="ml-3 font-bold NaN">React Material Dashboard</span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$2,200 USD</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-emerald-500 mr-2"></i> completed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                        <img src="https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">100%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500" style={{width: "100%"}}></div>
                                            </div>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
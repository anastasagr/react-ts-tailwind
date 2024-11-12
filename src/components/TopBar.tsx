import IconAdd from "./icons/IconAdd"



export default function TopBar() {
    return (
        <>
            <nav className="bg-white w-full flex fixed z-10 top-0 justify-between items-center mx-auto px-8 h-20">
                {/* logo */}
                <div className="inline-flex">
                    <a className="_o6689fn" href="/">
                        <div className="hidden md:flex flex flex-row justify-center items-center uppercase">
                            <div className="image">
                                <img width={40} height={40} src="megatasks.png" alt="" />
                            </div>
                            <div className="appname ml-4 text-xl font-bold text-primary">
                                MegaTasks
                            </div>

                        </div>
                        <div className="block md:hidden">
                            <img width={40} height={40} src="megatasks.png" alt="" />
                        </div>
                    </a>
                </div>
                {/* end logo */}


                {/* search bar */}
                <div className="sm:block flex-shrink flex-grow-0 justify-start px-5">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Search Tasks"
                        />
                        <button
                            className="absolute right-1 top-1 rounded bg-primary p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-slate-700 hover:bg-primaryHover active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* end search bar */}

                {/* login */}
                <div className="flex-initial">
                    <div className="flex justify-end items-center relative">
                        <div className="flex mr-4 items-center">

                            <div className="block relative">
                                <button
                                    type="button"
                                    className="inline-block py-2 px-2 hover:bg-blue-500 hover:text-white rounded-full relative "
                                >
                                    <IconAdd />

                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* end login */}
            </nav>

        </>
    )
}
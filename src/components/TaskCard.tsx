import Icon from "./icons/Icon";

export default function TaskCard() {
    return (
        <>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <div className="p-1 bg-primary"></div>
                <div className="p-8">
                    <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
                        Personal
                    </h2>
                    <p className="text-gray-600 mb-6">For large-scale enterprises</p>


                </div>
                <div className="p-4 flex flex-row gap-2 justify-center">
                    <button className="w-10 h-10 bg-black  flex justify-center items-center text-white rounded-lg px-4 py-2 hover:bg-primaryHover focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                        <Icon icon="las la-thumbs-up" size={32} />
                    </button>

                    <button className="w-10 h-10 bg-red-500 flex justify-center items-center text-white rounded-lg px-4 py-2 hover:bg-red-600 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                        <Icon icon="las la-trash" size={32} />
                    </button>
                </div>
            </div>
        </>
    );
}
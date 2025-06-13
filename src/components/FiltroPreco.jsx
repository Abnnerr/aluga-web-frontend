




const FiltroPreco = () => {
    return (
        <div className="p-4 border rounded-md w-full max-w-sm bg-white">
            <div className="flex items-center gap-4 mb-2">
                <label className="text-sm font-medium text-gray-700">Preço à partir de</label>
                <label className="text-sm font-medium text-gray-700">Até</label>
            </div>
            <div className="flex gap-4">
                <input
                    type="number"
                    placeholder="0"
                    className="w-full  border-gray-300 bg-gray-100 px-4 py-2 outline-none text-gray-700"
                />
                <input
                    type="number"
                    placeholder="0"
                    className="w-full border-gray-300 bg-gray-100  px-4 py-2 outline-none text-gray-700"
                />
            </div>
        </div>
    );
};

export default FiltroPreco;

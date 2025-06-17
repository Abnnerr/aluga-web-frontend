const Pesquisa = () => {
    return (
        <div className="flex items-center justify-between py-4 ">
            <div>
                <nav className="flex items-center text-gray-500 text-sm gap-1">
                    Casas para alugar
                    <span className="mx-1">{'>'}</span>
                    CE
                    <span className="mx-1">{'>'}</span>
                    Fortaleza
                </nav>
                <span className="font-bold text-orange-600 text-base">
                    122 Casas para alugar em Fortaleza - CE
                </span>
            </div>
            <div className="bg-white rounded-lg border px-4 py-2  flex-col min-w-[282px]">
                <label className="ml-3 text-gray-500 text-sm">Ordenar por</label>
                <select className="w-full px-2 py-1  text-orange-600 font-bold focus:outline-none">
                    <option value="relevance">Mais relevantes</option>
                    <option value="price_asc">Menor preço</option>
                    <option value="price_desc">Maior preço</option>
                </select>
            </div>
        </div>
    );
};

export default Pesquisa;
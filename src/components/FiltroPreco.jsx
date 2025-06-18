import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

const FiltroPreco = () => {

    const {filtro, setFiltro, imoveis, setImoveis} = useContext(UsuarioContext)

    let resultados = imoveis;

    if (filtro.precoMin || filtro.precoMax) {
        resultados = resultados.filter((imovel) => {
            const preco = imovel.imovel_tipo === "Casa"
                ? imovel.imovel_valor
                : imovel.imovel_valor_condominio;

            const min = filtro.precoMin ? parseFloat(filtro.precoMin) : 0;
            const max = filtro.precoMax ? parseFloat(filtro.precoMax) : Infinity;

            return preco >= min && preco <= max;
        });
    }
    setImoveis(resultados);


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
                    className="w-full  rounded-lg border-gray-300 bg-gray-100 px-4 py-2 outline-none text-gray-700"
                    onChange={(e) => setFiltro((prev) => ({ ...prev, precoMin: e.target.value }))}
                />
                <input
                    type="number"
                    placeholder="0"
                    className="w-full rounded-lg border-gray-300 bg-gray-100  px-4 py-2 outline-none text-gray-700"
                    onChange={(e) => setFiltro((prev) => ({ ...prev, precoMin: e.target.value }))}
                />
            </div>
        </div>
    );
};

export default FiltroPreco;

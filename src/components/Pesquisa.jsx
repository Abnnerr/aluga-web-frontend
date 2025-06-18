import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

const Pesquisa = () => {
    const { filtro, imoveis,setImoveis } = useContext(UsuarioContext)

    function ordenarImoveis(tipo) {
        const listaOrdenada = [...imoveis].sort((a, b) => {
            const precoA = a.imovel_tipo === "Casa" ? a.imovel_valor : a.imovel_valor_condominio;
            const precoB = b.imovel_tipo === "Casa" ? b.imovel_valor : b.imovel_valor_condominio;

            return tipo === "maior" ? precoB - precoA : precoA - precoB;
        });

        setImoveis(listaOrdenada);
    }

    return (
        <div className="flex items-center gap-[250px]  justify-between py-4 ">
            <div>
                <nav className="flex items-center text-gray-500 text-sm gap-1">
                    Casas para {filtro.modalidade}
                    <span className="mx-1">{'>'}</span>
                    {filtro.estado}
                    <span className="mx-1">{'>'}</span>
                    {filtro.local}
                </nav>
            </div>
            <div className="bg-white rounded-lg border px-4 py-2  flex-col ">
                <label className="ml-3 text-gray-500 text-sm">Ordenar por</label>
                <select className="w-full px-2 py-1  text-orange-600 font-bold focus:outline-none" onChange={(e) => ordenarImoveis(e.target.value)}>
                    <option value="relevance">Mais relevantes</option>
                    <option value="price_asc">Menor preço</option>
                    <option value="price_desc">Maior preço</option>
                </select>
        </div>
        </div >
    );
};

export default Pesquisa;
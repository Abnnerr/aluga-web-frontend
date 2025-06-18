
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { AXIOS } from "../services";
import Card from "./Cards";

const ListarImoveis = () => {
    const { filtro, logado,imoveis, setImoveis } = useContext(UsuarioContext);

    useEffect(() => {
        async function buscar() {
            try {
                const dadosFiltro = {
                    imovel_estado: filtro.estado,
                    imovel_bairro: filtro.bairro,
                    imovel_tipo: filtro.tipoImovel,
                    imovel_quarto: filtro.quarto,
                    imovel_garagem: filtro.garagem,
                    imovel_banheiro: filtro.banheiro,
                    imovel_modalidade: filtro.modalidade,
                };
                const request = await AXIOS.post('/imoveis', dadosFiltro);
                setImoveis(request.data);
            } catch (error) {
                console.error("Erro ao buscar imóveis:", error.message);
            }
        }
        buscar();
    }, [filtro]);
    console.log(imoveis)
    return (
        <div className="flex flex-col gap-3">
            <span className="font-bold text-orange-600 text-base">
                {imoveis.length} Casas para {filtro.modalidade } em {filtro.local} - {filtro.estado}
            </span>
            {imoveis.length === 0 && <h1 className="font-bold">Nenhum imóvel encontrado</h1>}
            {imoveis.map((imovel) => (
                <Card
                    key={imovel.imovel_id}
                    imagem={imovel.imovel_img}
                    logradouro={imovel.imovel_logradouro}
                    tipo={imovel.imovel_tipo}
                    bairro={imovel.imovel_bairro}
                    descricao={imovel.imovel_descricao}
                    area={imovel.imovel_area}
                    quarto={imovel.imovel_quarto}
                    garagem={imovel.imovel_garagem}
                    banheiro={imovel.imovel_banheiro}
                    preco={`R$ ${imovel.imovel_tipo == "Casa" ? imovel.imovel_valor : imovel.imovel_valor_condominio}`}
                    logado={logado}
                />
            ))}
        </div>
    );
}

export default ListarImoveis;
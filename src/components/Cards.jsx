import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { AXIOS } from "../services";




const Card = ({
    imagem,
    tipoImovel,
    endereco,
    bairro,
    descricao,
    area,
    quarto,
    garagem,
    banheiro,
    preco,
    logado,
}) => {

    const {usuario, setUsuario, imoveis} = useContext(UsuarioContext)
    async function favoritar() {

        // try {
        //     let dados = {
        //         usuario_id: usuario.usuario_id,
        //         imovel_id: imoveis.imovel_id
        //     }
        //     const request =  AXIOS.post('/favoritos', dados)
        //     alert(request.data)
        // } catch (error) {
            
        // }


    }


    return (
        <div className="flex bg-white rounded-lg  shadow p-4 mb-4 border">
            <img
                src={imagem}
                alt="Foto do imóvel"
                className="w-[280px] h-[180px] object-cover rounded-lg"
            />
            <div className="flex-1 flex flex-col justify-between px-6">
                <div>
                    <p className="font-bold text-gray-800">{endereco}</p>
                    <p className="text-gray-500">{bairro}</p>
                    <p className="mt-2 text-gray-700 whitespace-pre-line">{descricao}</p>
                </div>
                <div className="flex gap-6 mt-4 text-gray-500 text-sm">
                    <span>{area}</span>
                    <span className="flex items-center gap-1">
                        <box-icon name="bed"></box-icon> {quarto} Quartos
                    </span>
                    <span className="flex items-center gap-1">
                        <box-icon name="car"></box-icon> {garagem} Garagem
                    </span>
                    <span className="flex items-center gap-1">
                        <box-icon name="bath"></box-icon> {banheiro} Banheiro
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-end justify-between min-w-[120px]">

                {
                    logado && (
                        <>
                            <button className="  bg-orange-100 p-3  rounded-xl hover:bg-orange-200  duration-700 text-center flex items-center">
                                <box-icon name="heart" color="#DF4300" className="cursor-pointer" onClick={favoritar}></box-icon>
                            </button>
                            <div className="text-right">
                                <div className="text-[#DF4300] font-bold text-2xl">{preco}</div>
                                <button className="mt-2 cursor-pointer  bg-orange-100 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-200 duration-700">
                                    Contatar
                                </button>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default Card;


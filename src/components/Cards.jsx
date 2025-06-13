



const Card = ({
    imagem = "src/assets/casa.png",
    endereco = "Rua Eduardo Bezerra, 1182",
    bairro = "São João do Tauape, Fortaleza/CE",
    descricao = "Casa para alugar, 500m²\ Excelente Casa à venda ou Locação",
    area = "500m²",
    quartos = 3,
    garagem = 5,
    preco = "R$ 5.000"
}) => {
    return (
        <div className="flex bg-white rounded-lg w-[795px] shadow p-4 mb-4 border">
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
                        <box-icon name="bed"></box-icon> {quartos} Quartos
                    </span>
                    <span className="flex items-center gap-1">
                        <box-icon name="car"></box-icon> {garagem} Garagem
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-end justify-between min-w-[120px]">
                <button className="  bg-orange-100 p-3  rounded-xl hover:bg-orange-200  duration-700 text-center flex items-center">
                    <box-icon name="heart" color="#DF4300"></box-icon>
                </button>

                
                <div className="text-right">
                    <div className="text-[#DF4300] font-bold text-2xl">{preco}</div>
                    <button className="mt-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-200 duration-700">
                        Contatar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;


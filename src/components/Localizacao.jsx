
const Localizacao = () => {
    return (
        <div className="font-bold flex flex-col gap-[10px] relative">
            <h3>Localização</h3>
            <input type="text" className="w-[338px] h-[54px] rounded-lg border focus:outline-[#E04300] pl-[40px]" placeholder="Digite o Bairro, Rua ou Cidade" />
            <box-icon type='solid' name='map' className="fill-[#959595] absolute top-[78px] left-[40px] w-[20px] -z-1"></box-icon>
        </div>
    );
}

export default Localizacao;
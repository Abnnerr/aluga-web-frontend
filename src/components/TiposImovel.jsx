import { useState } from "react";

const TiposImovel = () => {
    const [selected, setSelected] = useState(1);
    return (
        <div className="flex flex-col gap-2 ">
            <h6 className="text-[16px] font-bold">Tipo de imóveis</h6>
            <div className="flex gap-6">
                {[1, 2].map((num) => (
                    <button
                        key={num}
                        onClick={() => setSelected(num)}
                        className={`px-4 py-3 rounded-[8px] text-lg font-medium border text-white cursor-pointer duration-700`}
                        style={{
                            backgroundColor: selected === num ? "#E04300" : "#E0430033",
                            borderColor: selected === num ? "#E04300" : "#E0430033",
                            color: selected === num ? "white" : "#E04300B2",
                            fill: selected == num ? "white": "#E04300B2"
                        }}
                    >
                        {
                            (num == 2) ? (
                                <>
                                    <div className="flex flex-col items-center">
                                        <box-icon name='buildings' color="white"></box-icon>
                                        Apartamento
                                    </div>
                                </>
                            ) :
                                <>
                                    <div className="flex flex-col items-center">
                                        <box-icon name='home' color="white"></box-icon>
                                        Casa
                                    </div>
                                </>
                        }
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TiposImovel

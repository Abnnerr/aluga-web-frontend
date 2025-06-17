import { useState } from "react";

const QuantidadeBanheiros = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex flex-col items-start ">
      <h2 className="text-lg font-semibold mb-4">Banheiros</h2>
      <div className="flex gap-4 ">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => setSelected(num)}
            className={`w-[72px] h-[54px] rounded-[8px] text-lg font-medium border text-white cursor-pointer duration-700`}
            style={{
              backgroundColor: selected === num ? "#E04300" : "#E0430033",
              borderColor: selected === num ? "#E04300" : "#E0430033",
              color: selected === num ? "white" : "#E04300B2"
            }}
          >
            +{num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuantidadeBanheiros;
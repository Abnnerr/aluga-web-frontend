
import { useRef, useState } from "react";
import { AXIOS } from "../services";
import { useNavigate } from "react-router";

const CadastroImoveis = () => {

  const estadoRef = useRef();
  const bairroRef = useRef();
  const cidadeRef = useRef();
  const descRef = useRef();
  const quartosRef = useRef();
  const garagemRef = useRef();
  const banheirosRef = useRef();
  const modalidadeRef = useRef();
  const tipoRef = useRef();
  const valorRef = useRef();
  const areaRef = useRef();
  const logradoRef = useRef()

  let navigate = useNavigate()



  function cadastrarImoveis(event) {
    event.preventDefault();
    let dados = {
      imovel_estado: estadoRef.current.value,
      imovel_bairro: bairroRef.current.value,
      imovel_cidade: cidadeRef.current.value,
      imovel_logradouro: logradoRef.current.value,
      imovel_descricao: descRef.value,
      imovel_tipo: tipoRef.current.value,
      imovel_quarto: quartosRef.current.value,
      imovel_garagem: garagemRef.current.value,
      imovel_banheiro: banheirosRef.current.value,
      imovel_modalidade: modalidadeRef.current.value,
      imovel_area: areaRef.current.value,
      imovel_valor: valorRef.current.value,
    }
    console.log(dados);
    
    const request = AXIOS.post('/cadastrar-imoveis', dados)
    console.log(request.data);
    navigate('/')
  }


  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg border">
      <h2 className="text-2xl font-bold text-center mb-4">Cadastro de Imóveis</h2>

      <form onSubmit={cadastrarImoveis} className="flex flex-col space-y-3">
        <input placeholder="Estado" ref={estadoRef} className="h-[50px] pl-[20px] border focus:outline-[#E04300] rounded-lg" />
        <input placeholder="Bairro" ref={bairroRef} className="h-[50px] pl-[20px] border focus:outline-[#E04300] rounded-lg" />
        <input placeholder="Cidade" ref={cidadeRef} className="h-[50px] pl-[20px] border focus:outline-[#c5724f] rounded-lg" />
        <input placeholder="Logradouro" ref={logradoRef} className="h-[50px] pl-[20px] border focus:outline-[#c5724f] rounded-lg" />
        <input placeholder="Descrição" ref={descRef} className="h-[50px] pl-[20px] border focus:outline-[#c5724f] rounded-lg" />
        <input type="number" placeholder="Quantidade de Quartos" ref={quartosRef} className="h-[50px] pl-[20px] border focus:outline-[#E04300] rounded-lg" />
        <input type="number" placeholder="Quantidade de Garagem" ref={garagemRef} className="h-[50px] pl-[20px] border focus:outline-[#E04300] rounded-lg" />
        <input type="number" placeholder="Quantidade de Banheiros" ref={banheirosRef} className="h-[50px] pl-[20px] border focus:outline-[#E04300] rounded-lg" />
        <input type="number" placeholder="Valor do imovel" ref={valorRef} className="h-[50px] pl-[20px] border focus:outline-[#E04300] rounded-lg" />
        <input placeholder="Area²" ref={areaRef} className="h-[50px] pl-[20px] border focus:outline-[#E04300] rounded-lg" />
        <select ref={modalidadeRef} className="h-[50px] pl-[20px] border rounded-lg focus:outline-[#E04300]">
          <option value="comprar">Comprar</option>
          <option value="alugar">Alugar</option>
        </select>
        <select ref={tipoRef} className="h-[50px] pl-[20px] border rounded-lg focus:outline-[#E04300] ">
          <option value="casa">Casa</option>
          <option value="apartamento">Apartamento</option>
        </select>
        <input type="file"  className="h-[50px] pl-[20px] border rounded-lg focus:outline-[#E04300]" />
        <button type="submit" className="p-2 bg-[#E04300] text-white rounded-md ">
          Cadastrar
        </button>
      </form>
      <h3 className="text-xl font-semibold mt-6">Imóveis Cadastrados</h3>
    </div>
  );
};

export default CadastroImoveis;
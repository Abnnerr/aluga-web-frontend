import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { AXIOS } from "../services";

const Cadastro = () => {

    const nomeRef = useRef();
    const emailRef = useRef();
    const telRef = useRef()
    const dataNascRef = useRef()
    const cpfRef = useRef()
    const senhaRef = useRef();


    // const { setLogado } = useContext(UsuarioContext)
    // const navigate = useNavigate()
    // 

    async function cadastro(event) {
        event.preventDefault();

        let nomeValue = nomeRef.current.value;
        let emailValue = emailRef.current.value;
        let telValue = telRef.current.value;
        let dataNascValue = dataNascRef.current.value;
        let cpfValue = cpfRef.current.value;
        let senhaValue = senhaRef.current.value;

        let dados = {
            usuario_nome: nomeValue,
            usuario_email: emailValue,
            usuario_telefone: telValue,
            usuario_nascimento: dataNascValue,
            usuario_cpf: cpfValue,
            usuario_senha: senhaValue,
            usuario_nivel: "cliente"
        }


        try {
            let request = await AXIOS.post('/cadastro', dados);
            console.log("Cadastro feito:", request.data);

        } catch (erro) {
            console.log("deu ruim", erro)
        }

    }
    return (
        <div className="flex flex-col items-center gap-[20px]  *:font-bold *:font-sans">
            <div className=" mt-[20px] px-[20px] py-[40px] border  border-[#00000026]  rounded ">
                <form onSubmit={cadastro}>
                    <div className="flex flex-col gap-[50px] items-center">
                        <a href="/"><img src="src/assets/logo.svg" alt="" /></a>
                        <div className="flex  gap-[20px]">
                            <div className="flex gap-[10px]">
                                <div className="flex flex-col gap-[25px]">
                                    <div className="flex flex-col gap-[5px] *:focus:outline-[#E04300]  *:focus:bg-white">
                                        <label htmlFor="" className="text-[16px] text-[#595959] duration-700">Nome</label>
                                        <input type="text" required className="w-[340px] h-[50px] rounded pl-[10px] border-[#00000026] border bg-[#00000026] duration-700" placeholder="Exemplo Pereira da Silva" ref={nomeRef} />
                                    </div>
                                    <div className="flex flex-col gap-[5px] *:focus:outline-[#E04300]  *:focus:bg-white">
                                        <label htmlFor="" className="text-[16px] text-[#595959] duration-700" >Email</label>
                                        <input type="email" required className="w-[340px] h-[50px] rounded pl-[10px] border-[#00000026] border bg-[#00000026] duration-700" placeholder="Exemplo@gmail.com" ref={emailRef} />
                                    </div>
                                    <div className="flex flex-col gap-[5px] *:focus:outline-[#E04300] *:focus:bg-white">
                                        <label htmlFor="" className="text-[16px] text-[#595959] duration-700">Telefone</label>
                                        <input type="tel" required className="w-[340px] h-[50px] pl-[10px] rounded border-[#00000026] border bg-[#00000026] duration-700" placeholder="(00) 00000-0000" ref={telRef} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex flex-col gap-[25px]">
                                    <div className="flex flex-col gap-[5px] *:focus:outline-[#E04300]  *:focus:bg-white">
                                        <label htmlFor="" className="text-[16px] text-[#595959] duration-700">Data de Nascimento</label>
                                        <input type="date" required className="w-[340px] h-[50px] rounded pl-[10px] border-[#00000026] border bg-[#00000026] duration-700" placeholder="00/00/0000" ref={dataNascRef} />
                                    </div>
                                    <div className="flex flex-col gap-[5px] *:focus:outline-[#E04300]  *:focus:bg-white">
                                        <label htmlFor="" className="text-[16px] text-[#595959] duration-700">Cpf</label>
                                        <input type="text" required className="w-[340px] h-[50px] rounded pl-[10px] border-[#00000026] border bg-[#00000026] duration-700" placeholder="000000000-00" ref={cpfRef} />
                                    </div>
                                    <div className="flex flex-col gap-[5px] *:focus:outline-[#E04300] *:focus:bg-white">
                                        <label htmlFor="" className="text-[16px] text-[#595959] duration-700">Senha</label>
                                        <input type="password" required className="w-[340px] h-[50px] pl-[10px] rounded border-[#00000026] border bg-[#00000026] duration-700" placeholder="Enserir Senha" ref={senhaRef} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-[340px] h-[50px] bg-[#E04300] rounded cursor-pointer text-white">Enviar</button>
                    </div>
                </form>

            </div>
            <h4 className="text-[#E04300]">AlugaWeb, Todos os direitos reservados</h4>
        </div>
    );
}

export default Cadastro;
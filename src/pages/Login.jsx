import {useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { AXIOS } from "../services";

const Login = () => {

    const emailRef = useRef();
    const senhaRef = useRef();
    const emailTxtRef = useRef();
    const senhaTxtRef = useRef();

    const { setLogado } = useContext(UsuarioContext)


    const [email, setEmail] = useState("Email");
    const [senha, setSenha] = useState("Senha");


    const navigate = useNavigate()

    async function loginUsuario(event) {
        event.preventDefault();

        const emailValue = emailRef.current.value;
        const senhaValue = senhaRef.current.value;


        let dados = {
            usuario_email: emailValue,
            usuario_senha: senhaValue
        }

        try {
            const request = await AXIOS.post('/login', dados)
            console.log(request.data);

            if(request.data.token) {
                sessionStorage.setItem('token',request.data.token)
                sessionStorage.setItem('usuario',JSON.stringify(request.data.usuario))
                setLogado(true)
                navigate('/imoveis')
            }

        } catch (error) {
            console.log('deu ruim', error.message);
            
        }

    }

    return (
        <div className="flex flex-col items-center gap-[20px]  *:font-bold *:font-sans">
            <div className=" w-[400px] mt-[20px] px-[20px] py-[40px] border  border-[#00000026]  rounded ">
                <form onSubmit={loginUsuario}>
                    <div className="flex flex-col gap-[50px] items-center">
                        <a href="/"><img src="src/assets/logo.svg" alt="" /></a>
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-col gap-[25px]">
                                <div className="flex flex-col gap-[5px] *:focus:outline-[#E04300]  *:focus:bg-white">
                                    <label htmlFor="" className="text-[16px] text-[#595959] duration-700" ref={emailTxtRef}>{email}</label>
                                    <input type="email" required className="w-[340px] h-[50px] rounded pl-[10px] border-[#00000026] border bg-[#00000026] duration-700" placeholder="Enserir Email" ref={emailRef} />
                                </div>
                                <div className="flex flex-col gap-[5px] *:focus:outline-[#E04300] *:focus:bg-white">
                                    <label htmlFor="" className="text-[16px] text-[#595959] duration-700" ref={senhaTxtRef}>{senha}</label>
                                    <input type="password" required className="w-[340px] h-[50px] pl-[10px] rounded border-[#00000026] border bg-[#00000026] duration-700" placeholder="Enserir Senha" ref={senhaRef} />
                                </div>
                            </div>
                            <div className="flex justify-between text-[13px] *:hover:text-[#E04300] *:duration-700 ">
                                <a href="/recuperar-senha">Esquecia a senha</a>
                                <a href="/cadastro">Criar Conta</a>
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

export default Login;
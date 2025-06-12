import { use, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import dados from "../api/api.json";
import { UsuarioContext } from "../contexts/UsuarioContext";

const Login = () => {

    const emailRef = useRef();
    const senhaRef = useRef();
    const emailTxtRef = useRef();
    const senhaTxtRef = useRef();

    const { setLogado }  = useContext(UsuarioContext)


    const [email, setEmail] = useState("Email");
    const [senha, setSenha] = useState("Senha");


    const navigate = useNavigate()

    function loginUsuario(event) {
        event.preventDefault();

        const emailValue = emailRef.current.value;
        const senhaValue = senhaRef.current.value;


        const dadosUsuario = dados.usuario.find((item) =>
            item.usuario_email == emailValue &&
            item.usuario_senha == senhaValue
        );
        const verificaSenha = dados.usuario.some((item) => item.usuario_senha == senhaValue);
        const verificaEmail = dados.usuario.some((item) => item.usuario_email == emailValue);

        const data = dadosUsuario;

        // setEmail('Email');
        // setSenha('Senha');

        emailRef.current.classList.remove("border-red-500");
        senhaRef.current.classList.remove("border-red-500");
        emailTxtRef.current.classList.remove("text-red-500");
        senhaTxtRef.current.classList.remove("text-red-500");

        if (data) {
            console.log('verdadeiro')
            setLogado(true)
            navigate('/')
        }
        else if (verificaEmail == false && verificaSenha == false) {
            emailRef.current.classList.add('border-red-500');
            senhaRef.current.classList.add('border-red-500');

            setEmail('*Email');
            setSenha('*Senha');

            emailTxtRef.current.classList.add('text-red-500');
            senhaTxtRef.current.classList.add('text-red-500');
        }
        else if (verificaEmail == false) {
            emailRef.current.classList.add('border-red-500');

            setEmail('*Email');

            emailTxtRef.current.classList.add('text-red-500')
        }
        else if (verificaSenha == false) {
            senhaRef.current.classList.add('border-red-500');

            setSenha('*Senha');

            senhaTxtRef.current.classList.add('text-red-500')
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
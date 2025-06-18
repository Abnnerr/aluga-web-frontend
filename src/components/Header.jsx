import { useContext } from 'react';
import logo from '../assets/logo.png';
import { UsuarioContext } from '../contexts/UsuarioContext';

const Header = () => {

    const { logado, usuario,setLogado } = useContext(UsuarioContext)

    async function sair() {
        sessionStorage.removeItem('usuario')
        sessionStorage.removeItem('token')
        setLogado(false)
    }

    return (
        <header className="py-4 px-[50px] border-b border-[#00000026] ">
            <nav className="px-2 flex justify-between items-center">
                <div className="flex items-center cursor-pointer ">
                    <div className="">
                        <img src={logo} alt="Logo Aluga Web" />

                    </div>
                </div>
                {
                    logado ? (

                        <div className='flex items-center gap-[10px]'>
                            <div className="flex items-center gap-[40px]">
                                <a href="/favoritos" className='font-bold underline hover:text-[#e65100] duration-700'>Favoritos</a>
                                <div className="flex flex-col items-end">
                                    <h1 className="text-[20px] font-bold text-5xl text-[#e65100]">{usuario.usuario_nome}</h1>
                                    <button onClick={sair} className='cursor-pointer font-bold'>Sair</button>
                                </div>
                            </div>

                            <div className='w-[50px] h-[50px] rounded-[100%] text-center bg-[#e65100]'>
                                <img src="" alt="" />
                            </div>
                        </div>

                    ) :
                        <>
                            <a href='/login' className="flex items-center cursor-pointer bg-orange-100 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-200 duration-700">
                                <box-icon name='user' color='#e65100'></box-icon>
                                <span>Entrar</span>
                            </a>
                        </>
                }

            </nav>
        </header>
    );
};

export default Header;

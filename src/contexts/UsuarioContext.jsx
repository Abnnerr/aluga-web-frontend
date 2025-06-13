import { createContext, useState} from "react";


export const UsuarioContext = createContext()


const UsuarioProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);
    const usuarioInfo = sessionStorage.getItem('usuario')
    

    return (
        <UsuarioContext.Provider value={{ logado, setLogado, usuarioInfo }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioProvider;
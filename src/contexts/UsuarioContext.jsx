import { createContext, useState} from "react";


export const UsuarioContext = createContext()


const UsuarioProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);


    return (
        <UsuarioContext.Provider value={{ logado, setLogado }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioProvider;
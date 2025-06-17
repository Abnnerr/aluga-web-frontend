import { createContext, useEffect, useState } from "react";


export const UsuarioContext = createContext()


const UsuarioProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState({})


    useEffect(() => {
        let token = sessionStorage.getItem('token')

        if (token) {
            setLogado(true)
            setUsuario(JSON.parse(sessionStorage.getItem("usuario")))
        }

    }, [logado])

    return (
        <UsuarioContext.Provider value={{ logado, setLogado, usuario}}>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioProvider;
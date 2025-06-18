import { createContext, useEffect, useState } from "react";


export const UsuarioContext = createContext()


const UsuarioProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState({})
    const [imoveis, setImoveis] = useState([]);
    console.log(imoveis);
    
    const [filtro, setFiltro] = useState({
        estado: "",
        banheiro: "",
        quarto: "",
        garagem: "",
        local: "",
        tipoImovel: "",
        modalidade: "",
        precoMin: "",
        precoMax: ""
    })
    function atualizarFiltro(chave, valor) {
        setFiltro((anterior) => ({
            ...anterior,
            [chave]: valor,
        }))
    }
    useEffect(() => {
        let token = sessionStorage.getItem('token')

        if (token) {
            setLogado(true)
            setUsuario(JSON.parse(sessionStorage.getItem("usuario")))
        }

    }, [logado])

    return (
        <UsuarioContext.Provider value={{ logado, setLogado, usuario, atualizarFiltro, filtro, imoveis, setImoveis }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioProvider;
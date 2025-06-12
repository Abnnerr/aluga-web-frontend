import logo from "../assets/logo.svg"
const Footer = () => {
    return (
        <footer className="py-4 px-[50px] bg-[#DF4300]">
            <div className="px-2 flex justify-between items-center">
                <div className="flex gap-[20px] items-center">
                    <div className="p-3 bg-white rounded">
                        <img src='/src/assets/favicon.svg' alt="Logo Aluga Web" />

                    </div>
                    <p className="font-bold text-white">Aluga Web</p>
                </div>


                <span className="text-white ">Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}

export default Footer;
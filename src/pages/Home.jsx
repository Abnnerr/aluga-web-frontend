const Home = () => {
    return (
        <div className="px-[50px] flex justify-between items-center">
            <div className="">
                <div className="flex flex-col gap-[10px] relative *:font-bold">
                    <h3 className="text-[30px] font-bold ml-[10px]">Onde você quer morar</h3>
                    <input type="text" className="w-[500px] h-[60px] pl-[60px] border-[#E04300] border-2  rounded-[50px] focus:outline-[#E0430070] duration-700"/>
                    <div className="flex gap-[345px]  left-[10px] top-[65px] px-[20px] absolute items-center -z-1">
                        <box-icon type='solid' name='map' className="fill-[#E04300]"></box-icon>
                        <button className="bg-[#E04300] px-5 py-2 rounded-[20px] text-white">Buscar</button>
                    </div>
                </div>
            </div>
            <img src="src/assets/imgmulher.png" alt="" className="h-[450px] mt-16 " />
        </div>
    );
}

export default Home;
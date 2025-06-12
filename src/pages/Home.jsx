const Home = () => {
    return (
        <div className="px-[50px] flex justify-between items-center">
            <div className="">
                <div className="flex flex-col gap-[10px] relative *:font-bold">
                    <h3 className="text-[30px] font-bold ml-[10px]">Onde você quer morar</h3>
                    <input type="text" className="w-[500px] h-[60px] pl-[60px] border-[#E04300] border-2  rounded-[50px] relative focus:outline-[#DF430033] focus:duration-700" />
                    <box-icon type='solid' name='map' className="absolute fill-[#E04300] left-[30px] top-[72px]"></box-icon>
                    <button className="absolute  px-7 py-3 bg-[#E04300] text-white rounded-[20px] right-[10px] top-[61px] cursor-pointer hover:bg-[#DF4300B2] duration-700">Buscar</button>
                </div>
            </div>
            <img src="src/assets/imgmulher.png" alt="" className="h-[450px] mt-16 " />
        </div>

    );
}

export default Home;
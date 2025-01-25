

const Email2 = () => {
  return (
    <div className=" sm:h-[481px] w-auto h-[370px]   sm:pb-[65px] sm:pt-[52px] sm:pl-[93px] sm:pr-[74px] text-[#2A254B] bg-[#F9F9F9] p-0 ">
         <div className=" sm:w-auto sm:h-h-auto  justify-center flex flex-col items-center sm:pt-[68px] sm:pb-[54px]   pl-[24px] pr-[37px] pt-[46px] pb-[54px] bg-white ">
            <div id="top content" className="  w-auto h-auto flex flex-col sm:gap-[30px] gap-[20px] ">
                <div id=" top text " className="w-auto h-auto flex flex-col gap-[12px] ">
                    <h2 className=" font-clash font-normal text-[24px] sm:text-[36px]  leading-[33.6px] sm:leading-[50.4px] sm:text-center ">Join the club and get the benefits</h2>
                    <p className="font-satoshi font-normal sm:text-[16px] sm:leading-[24px] text-[14px] leading-[21px]  sm:text-center sm:mx-[50.5px] ">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                </div>
                
               
            </div>
            <div className="w-auto h-auto sm:mx-[49px] mt-[72px] flex ">
                <input type="text" placeholder="      your@email.com" className=" bg-[#F9F9F9] "/>
                <button className=" w-auto  h-auto py-[16px] px-[32px] flex gap-[10px] bg-[#2A254B]"> 
                    <p className="font-satoshi font-normal text-[16px] leading-[24px] text-center text-nowrap text-white">Sign up</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Email2
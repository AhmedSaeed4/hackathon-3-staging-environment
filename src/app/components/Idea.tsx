//import Image from "next/image"
//import sideimg from "../assets/Image Block.png"

const Idea = () => {
  return (
    <div className=" w-auto sm:h-[598px]  h-[628px] sm:py-[60px] py-[32px] px-[4.17vw]  flex-col justify-center sm:flex-row flex gap-[16px] ">
    <div id="textblock" className=" sm:w-[50%] w-[100%] sm:h-auto h-[281px]  sm:pt-[64px] sm:pl-[64px] sm:pr-[75px] sm:pb-[54px] px-[32px] pt-[36px] pb-[30px] gap-14  flex flex-col justify-between   bg-[#2A254B] ">
        <div id="topcontent" className=" w-auto h-auto flex flex-col gap-[12px] ">
            <p className="  font-normal font-clash sm:text-[32px] text-[20px] sm:leading-[39.36px] leading-[28px] text-white ">It started with a small idea</p>
            <p className=" font-satoshi font-normal sm:text-[18px] sm:leading-[24.3px] text-[14px] leading-[21px] text-white">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
        </div>
        <div id="btn" className="max-w-max  h-auto py-[16px] px-[32px] flex sm:justify-start self-center sm:self-start justify-center gap-[10px]  bg-[#F9F9F926] ">
        <p className=" font-satoshi font-normal text-[16px] leading-[24px]  text-white">View collection</p>
        </div>
    </div>
    
    <div className="bg-[url('/ideasfix.jpeg')]  sm:w-[50%] w-[100%]  h-[478px]  bg-center bg-cover block "></div>
        
    
</div>
  )
}

export default Idea
import Image from "next/image"
import aero from "../assets/aero.png"


const Filters = () => {
  return (
    <div id="filters" className=" text-nowrap w-auto flex py-[20px] sm:py-[8px] px-[24px] justify-between">
        <div className="w-full  justify-around flex md:hidden gap-[16px] ">
            <button className="  w-full h-auto flex gap-[8px] justify-center items-center py-[16px] pl-[24px] pr-[32px] bg-[#F9F9F9]">
                <p className="font-clash font-normal text-[16px] leading-[24px] ">Filters</p>
                <Image src={aero} alt=""/>
            </button>
            <button className=" w-full h-auto flex gap-[8px] items-center justify-center py-[16px] pl-[24px] pr-[32px] bg-[#F9F9F9]">
                <p className="font-clash font-normal text-[16px] leading-[24px] ">Sorting</p>
                <Image src={aero} alt=""/>
            </button>
        </div>

        <div id="filters2" className="w-auto h-[48px] gap-[12px] hidden items-center justify md:flex ">
            <button className=" w-auto h-auto flex gap-[8px] items-center py-[12px] px-[24px]">
                <p className="font-clash font-normal text-[16px] leading-[24px] ">Category</p>
                <Image src={aero} alt=""/>
            </button>

            <button className=" w-auto h-auto flex gap-[8px] items-center py-[12px] px-[24px]">
                <p className="font-clash font-normal text-[16px] leading-[24px] ">Product type</p>
                <Image src={aero} alt=""/>
            </button>

            <button className=" w-auto h-auto flex gap-[8px] items-center py-[12px] px-[24px]">
                <p className="font-clash font-normal text-[16px] leading-[24px] ">Price</p>
                <Image src={aero} alt=""/>
            </button>

            <button className=" w-auto h-auto flex gap-[8px] items-center py-[12px] px-[24px]">
                <p className="font-clash font-normal text-[16px] leading-[24px] ">Brand</p>
                <Image src={aero} alt=""/>
            </button>
        </div>
        <div id="sorting" className=" hidden md:flex justify-center items-center gap-[16px] mr-[84px]">
            <p className="font-satoshi font-normal text-[14px] leading-[21px] ">Sorting by:</p>
            <button className="  flex justify-center items-center py-[12px] px-[24px] gap-[8px]">
                <p className="font-satoshi font-normal text-[16px] leading-[24px]">Date added</p>
                <Image src={aero} alt=""/>
            </button>
        </div>
    </div>
  )
}

export default Filters
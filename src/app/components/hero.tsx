import Image from "next/image"
import heropic from "../assets/Hero Blocks.png"
import short from "../assets/short.png"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="sm:w-[1440px] sm:h-[704px] relative xs:w-[390px] xs:h-[639px] "><Image src={heropic} alt="bg image" className=" sm:block xs:hidden"/> 
        <div className="sm:w-[630px] sm:h-[444px] sm:absolute xs:relative bg-white sm:top-[130px] sm:left-[730px] xs:w-auto xs:h-auto xs:top-[60px] xs:left-[24px] sm:block sm:gap-0  xs:flex xs:flex-col xs:gap-[32px] ">
            <div className=" w-auto h-auto absolute  sm:top-[48px] sm:left-[56px] flex flex-col sm:gap-[20px] xs:gap-[12px]  ">
                <h2 className="sm:w-[513px] sm:h-[90px] font-clash sm:text-[32px] sm:leading-[44.8px]  font-normal  xs:w-[341px] xs:h-[90px]  xs:text-[24px] xs:leading-[29.52px]">Luxury homeware for people who love timeless design quality</h2>
                <p className=" font-satoshi font-normal  sm:text-[18px] sm:leading-[27px] xs:text-[16px] xs:leading-[21.6px] sm:block xs:hidden text-[#5B5676] ">Shop the new Spring 2022 collection today</p>
                <p className="w-[341px] h-[66px] font-satoshi font-normal  sm:text-[18px] sm:leading-[27px] xs:text-[16px] xs:leading-[21.6px] xs:block sm:hidden text-[#5B5676] ">With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
            </div>
            <Link href={'/allproducts'} className="sm:w-auto xs:w-[337px] h-auto absolute sm:top-[342px] xs:top-[200px] sm:left-[56px] bg-[#F9F9F9] py-[16px] px-[32px] flex items-center justify-center gap-[10px] hover:bg-slate-200 ">
                    <p>View collection</p>
            </Link>
            
            
        </div>
        <Image src={short} alt="bg image" className=" xs:block sm:hidden  relative top-[335px]  "/> 
    </div>
  )
}

export default Hero
import Link from "next/link";
import Image from "next/image";
import face from "../assets/logos/face.png"
import insta from "../assets/logos/Vector.png"
import twitter from "../assets/logos/twitter.png"
import pin from "../assets/logos/pin.png"
import skype from "../assets/logos/skype.png"
import linkedin from "../assets/logos/linkedin.png"


const Footer2 = () => {
  return (
    <div>
        <div className=" px-6 sm:px-[82px] py-8 text-nowrap bg-[#2A254B] sm:pt-[58px]">
      <div className=" flex flex-col lg:flex-row gap-[48px]  sm:gap-[48px] ">

        <div className="sm:w-[50%] w-[100%] flex sm:gap-0 gap-[25px]">
         <div className="flex flex-col gap-[16px]">
            <h1 className="font-clash font-normal text-[36px] leading-[50.4px] text-white  "><Link href="/">Avion</Link></h1>

            <div className="flex flex-col gap-[12px] ">
                <p className="font-satoshi font-normal text-[14px] leading-[18.9px] text-white ">21 New York Street</p>
                <p className="font-satoshi font-normal text-[14px] leading-[18.9px] text-white ">New York City</p>
                <p className="font-satoshi font-normal text-[14px] leading-[18.9px] text-white ">United States of America</p>
                <p className="font-satoshi font-normal text-[14px] leading-[18.9px] text-white ">432 34</p>
            </div>
         </div>

            <div className=" flex flex-col gap-[22px] sm:ml-[65px] sm:mt-0 mt-[23px]"> 
                <p className="font-clash font-normal text-[16px] leading-[19.68px] text-white">Social links</p>
                <div className=" grid  sm:grid-cols-6 grid-cols-3 gap-[24px]">
                <Link href="/" className="w-[24px] h-[24px] flex justify-center items-center "><Image src={linkedin} alt="" className="w-[18px] h-[17.92px] "/> </Link>
                <Link href="/" className="w-[24px] h-[24px] flex justify-center items-center "><Image src={face} alt="" className="w-[18px] h-[18px] "/> </Link>
                <Link href="/" className="w-[24px] h-[24px] flex justify-center items-center "><Image src={insta} alt="" className="w-[18px] h-[18px] "/> </Link>
                <Link href="/" className="w-[24px] h-[24px] flex justify-center items-center "><Image src={skype} alt="" className="w-[19.37px] h-[19.42px] "/> </Link>
                <Link href="/" className="w-[24px] h-[24px] flex justify-center items-center "><Image src={twitter} alt="" className="w-[16.5px] h-[13.41px] "/> </Link>
                <Link href="/" className="w-[24px] h-[24px] flex justify-center items-center "><Image src={pin} alt="" className="w-[20.93px] h-[21px] "/> </Link>
            </div>
        </div>
    </div>
    <div className="sm:w-[50%] w-[100%] flex   ">
        {/* Menu Section */}
        <div className="text-white w-full sm:w-auto flex flex-col sm:hidden gap-[12px]">
          <h1 className="text-lg font-clash font-normal leading-[18.9px]">Our Company</h1>
          <div className="flex flex-col gap-[12px]  text-[14px] leading-[18.9px] font-satoshi font-normal">
            <h1>
              <Link href="/about">About us</Link>
            </h1>
            <h1>
              <Link href="/">Vacancies</Link>
            </h1>
            <h1>
              <Link href="/">Contact us</Link>
            </h1>
            <h1>
              <Link href="/">Privacy</Link>
            </h1>
            <h1>
              <Link href="/">Return policy</Link>
            </h1>
          </div>
        </div>

        <div className="text-white w-full sm:w-auto flex flex-col gap-[12px] sm:mr-[109px] ">
          <h1 className="text-lg font-clash font-normal leading-[18.9px]">Menu</h1>
          
          <div className="flex flex-col gap-[12px]  text-[14px] leading-[18.9px] font-satoshi font-normal">
            <h1><Link href="/">New Arrivals</Link></h1>
            <h1><Link href="/">Best sellers</Link></h1>
            <h1><Link href="/">Recently viewed</Link></h1>
            <h1><Link href="/">Popular this week</Link></h1>
            <h1><Link href="/">All Products</Link></h1>
          </div>
        </div>

        {/* Categories Section */}
        <div className="text-white w-full sm:w-auto flex-col gap-[12px] sm:mr-[135px] lg:flex hidden ">
          <h1 className="text-lg font-clash font-normal leading-[18.9px]">Categories</h1>
          <div className="flex flex-col gap-[12px]  text-[14px] leading-[18.9px] font-satoshi font-normal">
            <h1>
              <Link href="/">Crockery</Link>
            </h1>
            <h1>
              <Link href="/">Furniture</Link>
            </h1>
            <h1>
              <Link href="/">Homeware</Link>
            </h1>
            <h1>
              <Link href="/">Plant pots</Link>
            </h1>
            <h1>
              <Link href="/">Chairs</Link>
            </h1>
          </div>
        </div>

        {/* Company Section */}
        <div className="text-white w-full sm:w-auto  flex-col gap-[12px] sm:flex hidden">
          <h1 className="text-lg font-clash font-normal leading-[18.9px]">Our Company</h1>
          <div className="flex flex-col gap-[12px] text-[14px] leading-[18.9px] font-satoshi font-normal  ">
            <h1>
              <Link href="/about">About us</Link>
            </h1>
            <h1>
              <Link href="/">Vacancies</Link>
            </h1>
            <h1>
              <Link href="/">Contact us</Link>
            </h1>
            <h1>
              <Link href="/">Privacy</Link>
            </h1>
            <h1>
              <Link href="/">Return policy</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
      <hr className="bg-[#4E4D93] my-8" />

      {/* Footer Bottom Section */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center text-white gap-4">
        <div>
          <h1 className="font-clash font-normal text-[14px] leading-[18.9px] ">Copyright 2022 Avion LTD</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer2
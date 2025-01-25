"use client"
import Image, { StaticImageData  } from "next/image"


interface propstype {
    
    image: string | StaticImageData,
    title: string,
    content: string
}
const Featurescard = (props:propstype) => {
    const {image,title,content} = props
  return (
    
    <div className="flex gap-[10px] bg-[#F9F9F9] p-[3rem] ">
    <div className=" w-full h-auto flex flex-col gap-[12px] text-[#2A254B]">
   <Image src={image} alt="delivery icon" className=" w-[24px] h-[24px]"/>
   <h4 className="   font-clash font-normal text-[20px] leading-[28px] ">{title}</h4>
   <p className="    font-satoshi font-normal  text-[16px] leading-[24px] ">{content}</p>
</div>
</div>

  )
}

export default Featurescard
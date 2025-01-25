import Image, { StaticImageData } from "next/image"




interface IPropCartItem {
    image: string | StaticImageData ; // URL ya StaticImageData
    title?: string;
    description?: string;
    price?: number;
    quantity:number
  }


const CartItems = (prop : IPropCartItem) => {
    
    const {image, title, description, price, quantity  } = prop

    const truncatedDescription =
    description && description.length > 50
      ? description.substring(0, 50) + "..."
      : description;
  return (
    <div>
        <div id="product card" className="w-auto sm:flex sm:flex-row justify-between flex-col ">
            <div id="product one " className=" w-auto h-auto flex sm:gap-[21px] gap-[22px]">
               <Image src={image} alt="sasas" height={300} width={300} className="w-[109px] h-[134px] object-cover bg-center"/>
                <div id=" description" className=" flex flex-col gap-[8px]">
                    <h4 className="font-clash font-normal sm:text-[20px] sm:leading-[28px]  text-[16px] leading-[22.4px]  ">{title}</h4>
                    <p className="font-satoshi font-normal sm:text-[14px] sm:leading-[21px]  text-[14px] leading-[21px] text-nowrap  ">{truncatedDescription}</p>
                    <p  className="font-satoshi font-normal text-[14px] leading-[21px]  ">£{price}</p>

                    <div className="w-[122px]  justify-between px-[16px] py-[12px] sm:ml-[341px]  sm:mr-[252px] font-satoshi font-normal text-[16px] leading-[21.6px] sm:hidden flex"> 
                        <p className="text-[#EBE8F4]">-</p>
                        <p className=" ">{quantity}</p>
                        <p className="text-[#EBE8F4]">+</p>  
                     </div>
                </div>
            </div>

            <div className="w-[122px] justify-between px-[16px] py-[12px]   font-satoshi font-normal text-[16px] leading-[21.6px] sm:flex hidden"> 
            <button className="text-[#EBE8F4]">-</button>
            <p className=" ">{quantity}</p>
            <p className="text-[#EBE8F4]">+</p>  
            </div>
            <p className="font-satoshi font-normal text-[18px] leading-[27px] sm:block hidden  ">£{price}</p>
        </div>
       
</div>
  )
}


export default CartItems
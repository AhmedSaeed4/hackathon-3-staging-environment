import Image from "next/image";
import sideimg from "../assets/dandy chair.png";

const ProductDetails = () => {
  return (
    <div className="w-auto h-[1055px] sm:h-[759px] ">
      <div className="">
        {/* Main Product Section */}
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="w-full sm:w-1/2 h-auto">
            <div className="bg-[url('/chairfull.jpeg')]  h-[380px] sm:h-[759px]  bg-cover bg-center  "></div>
            <Image src={sideimg} alt="chair" className=" bg-cover bg-center w-auto hidden " />
          </div>
          <div className="w-full sm:w-1/2 px-4 sm:px-10 py-6 flex flex-col justify-center">
            <div>
              <p className="text-[36px] leading-[44.28px] font-clash font-normal">The Dandy Chair</p>
              <p className="py-2 text-[24px] leading-[32.4px] font-clash font-normal">$250</p>
            </div>
            <div className="text-[#505977] text-[16px] leading-[21.6px]">
              <h1 className="font-clash font-normal leading-[19.68px]">Description</h1>
              <div className="my-4 sm:my-6">
                <p className="font-satoshi font-normal">
                  A timeless design, with premium materials features as one of our most popular
                  and iconic pieces. The dandy chair is perfect for any stylish living space with
                  beech legs and lambskin leather upholstery.
                </p>
              </div>
              <div className="ml-4 font-satoshi font-normal">
                <ul className="list-disc space-y-1">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>
              <div>
                <div className="my-8">
                  <h1 className="font-clash font-normal">Dimensions</h1>
                </div>
                <div className="flex gap-12 sm:gap-20">
                  <div>
                    <h1 className="font-clash font-normal leading-[17.22px]">Height</h1>
                    <p className="font-satoshi font-normal">110cm</p>
                  </div>
                  <div>
                    <h1 className="font-clash font-normal leading-[17.22px]">Width</h1>
                    <p className="font-satoshi font-normal">75cm</p>
                  </div>
                  <div>
                    <h1 className="font-clash font-normal leading-[17.22px]">Depth</h1>
                    <p className="font-satoshi font-normal">50cm</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-8">
                  <div className="flex items-center gap-4">
                    <h1 className="font-clash font-normal">Amount:</h1>
                    <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                      <span>+</span> 1 <span>-</span>
                    </button>
                  </div>
                  <button className="w-full sm:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 sm:mt-0 font-satoshi font-normal">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

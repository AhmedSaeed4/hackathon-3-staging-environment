'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAppContext } from '@/context';
import wish from "../assets/add-to-wishlist-icon.png"
import { toast } from "sonner"
//import { Divide } from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
  price: number;
  quantity: number;
  tags: string[];
  description: string;
  features: string[];
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  category: {
    name: string;
    slug: string;
  };
}
const ProductDetails2 = ({ product }: { product: Product }) => {
    const { AddToCart , AddToWish } = useAppContext();
const [first, setfirst] = useState(0)
    
  return (
    <div className="w-auto h-auto">
      <div>
        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full overflow-hidden max-h-[600px] flex items-center object-cover md:w-1/2">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={900}
              height={800}
              className="mix-h-[600px] w-[2000px] object-fill bg-cover bg-center"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 sm:px-10 py-6 flex flex-col justify-center">
            <div>
              <p className="text-[36px] leading-[44.28px] font-clash font-normal">
                {product.name}
              </p>
              <p className="py-2 text-[24px] leading-[32.4px] font-clash font-normal">
                {product.price}
              </p>
            </div>
            <div className="text-[#505977] text-[16px] leading-[21.6px]">
              <h1 className="font-clash font-normal leading-[19.68px]">
                Description
              </h1>
              <div className="my-4 sm:my-6">
                <p className="font-satoshi font-normal">{product.description}</p>
              </div>
              <div className="ml-4 font-satoshi font-normal">
                <ul className="list-disc space-y-1">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="my-8">
                  <h1 className="font-clash font-normal">Dimensions</h1>
                </div>
                <div className="flex gap-12 sm:gap-20">
                  <div>
                    <h1 className="font-clash font-normal leading-[17.22px]">
                      Height
                    </h1>
                    <p className="font-satoshi font-normal">
                      {product.dimensions.height}
                    </p>
                  </div>
                  <div>
                    <h1 className="font-clash font-normal leading-[17.22px]">
                      Width
                    </h1>
                    <p className="font-satoshi font-normal">
                      {product.dimensions.width}
                    </p>
                  </div>
                  <div>
                    <h1 className="font-clash font-normal leading-[17.22px]">
                      Depth
                    </h1>
                    <p className="font-satoshi font-normal">
                      {product.dimensions.depth}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-8">
                  <div className="flex items-center gap-6">
                    <h1 className="font-clash font-normal">Amount:</h1>
                    <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                      <span></span> {first} <span></span>
                    </button>
                    <div>
                      <button onClick={()=>{AddToWish(product);toast("Item has been added to wishlist.")}}><Image src={wish} className='h-6 w-6 transition-all duration-100 ease-in-out
        transform hover:scale-105  ' alt='' /></button>
                    </div>
                  </div>
                  <button onClick={()=>{AddToCart(product) ;setfirst(first + 1);toast("Item has been added to cart.")
}} className="w-full sm:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 sm:mt-0 font-satoshi font-normal transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:bg-[#504691]">
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

export default ProductDetails2;

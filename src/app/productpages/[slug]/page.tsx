//import Banner from '@/app/components/banner';
import Email2 from '@/app/components/Email2';
import Features2 from '@/app/components/features2';
import Footer2 from '@/app/components/footer2';
//import NavBar2 from '@/app/components/NavBar2';
import { client } from '@/sanity/lib/client';
import React from 'react';

import ProductDetails2 from '@/app/components/ProductDetails2';
import Listings from '@/app/components/Listings';

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  // Sanity data fetch
  const sanityres = await client.fetch(
    `*[_type == "product" && slug.current == $slug]{
      _id,
      name,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      price,
      quantity,
      tags,
      description,
      features,
      dimensions {
        depth,
        width,
        height
      },
      category->{
        name,
        slug
      }
    }`,
    { slug: params.slug }
  );

  if (!sanityres || sanityres.length === 0) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <div>
        
        {/* Pass fetched data to ProductDetails */}
        <ProductDetails2 product={sanityres[0]} />
        <Features2 />
        <Listings/>
        <Email2 />
        <Footer2 />
      </div>
    </>
  );
};

export default Page;

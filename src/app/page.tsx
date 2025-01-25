//import Navbar from "./components/NavBar";
import Features from "./components/features";
import Listings from "./components/Listings";
import Idea from "./components/Idea";
import Email from "./components/Email";
import Footer from "./components/footer";
import Hero2 from "./components/Hero2";

export default async function Home() {
   /*const sanityres = await client.fetch(`*[_type == "product"]{
    _id,  
    name,
    "slug": slug.current,
   "imageUrl": image.asset->url,
    price,
    quantity,
    tags,
    description,
    features,
    dimensions,
    category->{   
      name,  
      slug    
    }
  }`)*/
  return (
    <div className="">
      
      <Hero2/>
      <Features/>
      <Listings />
      <Idea/>
      <Email/> 
      <Footer />
    </div>
  );
}

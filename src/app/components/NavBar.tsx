"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import search from "../assets/Search.png";
import cart8 from "../assets/Shopping--cart.png";
import user1 from "../assets/User--avatar.png";
import menu from "../assets/Menu.png";
import Link from "next/link";
import wish2 from "../assets/wish2.png";
import { useAppContext } from "@/context";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  //DialogDescription,
  //DialogHeader,
  //DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { auth } from "../firebase/config";


interface ProductSummary {
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
    depth?: number;
    width?: number;
    height?: number;
  };
  category: {
    name: string;
    slug: string;
  };
}


const Navbar = ({ product }: { product: ProductSummary[] }) => {
  const [imageUrl, setImageUrl] = useState<string>("/placeholder.svg");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
if(isAuthenticated){console.log("done")}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setImageUrl(user.photoURL || user1.src);
        setIsAuthenticated(true);
      } else {
        setImageUrl(user1.src);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);
  const { wishlist, RemoveFromWish, AddToCart } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductSummary[]>([]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    if (query.trim() !== "") {
      const filtered = product.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const [user] = useAuthState(auth);

  return (
    <div className="h-auto w-auto flex text-nowrap flex-col gap-[20px] px-[28px] pt-[20px] pb-[20px]">
      <div className="flex justify-between items-center">
        <Popover>
          <PopoverTrigger>
            <Image
              src={search}
              alt=""
              className="sm:w-[16px] sm:h-[16px] sm:block  "
            />
          </PopoverTrigger>
          <PopoverContent>
            <div className="mt-4">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search products..."
                className="border rounded px-4 py-2 w-full"
              />
            </div>
            {searchTerm.trim() !== "" && (
              <div className="mt-4 ">
                {filteredProducts.length > 0 ? (
                  <ul className="grid grid-cols-1 gap-4">
                    {filteredProducts.map((item) => (
                      <Link key={item._id} href={`../productpages/${item.slug}`}>
                        <li
                          key={item._id}
                          className="border flex gap-2 p-4 rounded shadow"
                        >
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={900}
                            height={800}
                            className="h-[50px] w-[50px] object-fill bg-cover bg-center"
                          />
                          <div className="flex flex-col justify-between">
                            <h2 className="font-bold">{item.name}</h2>
                            <p className="text-gray-600 font-bold">
                              ${item.price}
                            </p>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            )}
          </PopoverContent>
        </Popover>

        <h1 className="font-clash text-[24px]">
          <Link href="/">Avion</Link>
        </h1>

        <div className="gap-[20px] flex justify-center sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Image src={wish2} alt="" className="h-4 w-4 block sm:hidden" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Saved item</SheetTitle>
                <SheetDescription className="space-y-3">
                  {wishlist.map((elem) => {
                    return (
                      <div
                        key={elem._id}
                        className="space-y-2 bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 ease-in-out"
                      >
                        <Image
                          src={elem.imageUrl}
                          alt="product image"
                          height={300}
                          width={300}
                          className="w-[300px] h-[100px] rounded-lg object-cover bg-center"
                        />
                        <div>
                          <p className="font-clash font-bold text-black">
                            ${elem.name}
                          </p>
                          <p>${elem.price}</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => RemoveFromWish(elem._id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-200 ease-in-out"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => {
                              AddToCart(elem);
                              RemoveFromWish(elem._id);
                            }}
                            className="bg-[#2A254B] hover:bg-[#3f3870] text-white px-4 py-2 rounded-md shadow-md transition-all duration-200 ease-in-out"
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger>
              <Image src={menu} alt="" className="w-[16px] h-[16px]" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="space-y-5">
                <SheetTitle>
                  <span className="flex space-x-4 items-center">
                    <span>NavBar</span>{" "}
                    <span>
                      <Link href={"../cart"}>
                        <Image
                          src={cart8}
                          alt=""
                          className="w-[16px] h-[16px] transition-all duration-300 ease-in-out
        transform hover:scale-125 "
                        />
                      </Link>
                    </span>{" "}
                    <Dialog>
                      <DialogTrigger>
                        <Image
                          src={user1}
                          alt="User Icon"
                          className="w-[16px] h-[16px]"
                        />
                      </DialogTrigger>
                      <DialogContent className="p-6 bg-white rounded-lg shadow-lg max-w-xs sm:max-w-sm">
                        <span className="flex flex-col items-center">
                          <img
                            src={imageUrl}
                            alt="Profile Picture"
                            width={80}
                            height={80}
                            className="rounded-full mb-4"
                          />
                          <h2 className="text-xl font-semibold text-gray-800 mb-1">
                            {user?.displayName || "John Doe"}
                          </h2>
                          <p className="text-sm text-gray-500 mb-4">
                            {user?.email || "example@email.com"}
                          </p>
                          <button
                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-200"
                            onClick={() => signOut(auth)}
                          >
                            Logout
                          </button>
                        </span>
                      </DialogContent>
                    </Dialog>
                  </span>
                </SheetTitle>
                <SheetDescription>
                  <span className="self-center h-auto w-auto gap-[2.75rem] space-y-3 text-[#726E8D] flex flex-col  ">
                    <span
                      id="sign-up"
                      className="space-x-3 flex justify-center"
                    >
                      {!user ? (
                        <>
                          <Link href={"../sign-up"}>
                            <button className="bg-gray-300 p-1 font-clash rounded-sm font-normal leading-4 tracking-[0.5px] text-[12px] transition-transform transform hover:scale-95 hover:bg-gray-400 active:scale-95 active:bg-gray-500">
                              SIGNUP
                            </button>
                          </Link>

                          <Link href={"../sign-in"}>
                            <button className="bg-[#2A254B] rounded-sm p-1 font-clash font-normal leading-4 tracking-[0.5px] text-white text-[12px] transition-transform transform hover:scale-95 hover:bg-[#3f3870] active:scale-95 active:bg-[#241e4d]">
                              LOGIN
                            </button>
                          </Link>
                        </>
                      ) : (
                        <>
                          {/* Login Data only here */}
                          <span className="flex gap-2 items-center">
                            <span className="text-sm font-clash  uppercase tracking-[0.8px] cursor-defspant font-semibold">
                              {user.displayName}
                            </span>
                            <button
                              onClick={() => signOut(auth)}
                              className="bg-[#2A254B] rounded-sm p-1 font-clash font-normal leading-4 tracking-[0.5px] text-white text-[12px] transition-transform transform hover:scale-95 hover:bg-[#3f3870] active:scale-95 active:bg-[#241e4d]"
                            >
                              LOGOUT
                            </button>
                          </span>
                        </>
                      )}
                    </span>
                    {product.slice(1, 8).map((elem: ProductSummary) => {
                      const categorySlug = elem.category?.slug || "";
                      return (
                        <Link
                          href={`../category/${categorySlug}`}
                          key={elem._id}
                          className=""
                        >
                          <button className=" transition-all duration-300 ease-in-out
        transform hover:scale-125 ">{elem.category.name}</button>
                        </Link>
                      );
                    })}
                  </span>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="sm:flex gap-[16px] items-center hidden">
          <div id="sign-up" className="space-x-3 flex justify-center">
            {!user ? (
              <>
                <Link href={"../sign-up"}>
                  <button className="bg-gray-300 p-1 font-clash rounded-sm font-normal leading-4 tracking-[0.5px] text-[12px] transition-transform transform hover:scale-95 hover:bg-gray-400 active:scale-95 active:bg-gray-500">
                    SIGNUP
                  </button>
                </Link>

                <Link href={"../sign-in"}>
                  <button className="bg-[#2A254B] rounded-sm p-1 font-clash font-normal leading-4 tracking-[0.5px] text-white text-[12px] transition-transform transform hover:scale-95 hover:bg-[#3f3870] active:scale-95 active:bg-[#241e4d]">
                    LOGIN
                  </button>
                </Link>
              </>
            ) : (
              <>
                {/* Login Data only here */}
                <div className="flex gap-2 items-center">
                  <p className="text-sm font-clash  uppercase tracking-[0.8px] cursor-default font-semibold">
                    {user.displayName}
                  </p>
                  <button
                    onClick={() => signOut(auth)}
                    className="bg-[#2A254B] rounded-sm p-1 font-clash font-normal leading-4 tracking-[0.5px] text-white text-[12px] transition-transform transform hover:scale-95 hover:bg-[#3f3870] active:scale-95 active:bg-[#241e4d]"
                  >
                    LOGOUT
                  </button>
                </div>
              </>
            )}
          </div>
          <Sheet>
            <SheetTrigger>
              <Image src={wish2} alt="" className="h-4 w-4 transition-all duration-300 ease-in-out
        transform hover:scale-125 " />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Saved item</SheetTitle>
                <SheetDescription className="space-y-3">
                  {wishlist.map((elem) => {
                    return (
                      <div
                        key={elem._id}
                        className="space-y-2 bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 ease-in-out"
                      >
                        <Image
                          src={elem.imageUrl}
                          alt="product image"
                          height={300}
                          width={300}
                          className="w-[300px] h-[100px] rounded-lg object-cover bg-center"
                        />
                        <div>
                          <p className="font-clash font-bold text-black">
                            ${elem.name}
                          </p>
                          <p>${elem.price}</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => RemoveFromWish(elem._id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition-all duration-200 ease-in-out"
                          >
                            Remove
                          </button>
                          <button 
                            onClick={() => {
                              AddToCart(elem);
                              RemoveFromWish(elem._id);
                            }}
                            className="bg-[#2A254B] hover:bg-[#3f3870] text-white px-4 py-2 rounded-md shadow-md transition-all duration-200 ease-in-out"
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Link href={"../cart"}>
            <Image src={cart8} alt="" className="w-[16px] h-[16px] transition-all duration-300 ease-in-out
        transform hover:scale-125 " />
          </Link>

          <Dialog>
            <DialogTrigger>
              <Image
                src={user1}
                alt="User Icon"
                className="w-[16px] h-[16px] transition-all duration-300 ease-in-out
        transform hover:scale-125 "
              />
            </DialogTrigger>
            <DialogContent className="p-6 bg-white rounded-lg shadow-lg max-w-xs sm:max-w-sm">
              <div className="flex flex-col items-center">
                <img
                  src={imageUrl}
                  alt="Profile Picture"
                  width={80}
                  height={80}
                  className="rounded-full mb-4 transition-all duration-300 ease-in-out
        transform hover:scale-125 "
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {user?.displayName || "John Doe"}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {user?.email || "example@email.com"}
                </p>
                <button
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-200"
                  onClick={() => signOut(auth)}
                >
                  Logout
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="border border-[#0000001A] sm:flex hidden"></div>
      <ul className="self-center h-auto w-auto gap-[2.75rem] text-[#726E8D] sm:flex hidden">
        {product.slice(1, 8).map((elem: ProductSummary) => {
          const categorySlug = elem.category?.slug || "";
          return (
            <Link className="transition-all duration-300 ease-in-out
        transform hover:scale-125 
          " href={`../category/${categorySlug}`} key={elem._id}>
              {elem.category.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

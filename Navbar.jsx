import React, { useState } from "react";
import { AiOutlineDoubleRight, AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillHeart, AiFillWallet, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  const [nav, setNav] = useState(false);
  const [pick, setPick] = useState(false);
  const [cart, setCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleChangeAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleChangeSub = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="max-w-[1640px] fixed top-0 left-0 right-0 z-10 bg-orange-300 h-14  mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-xl px-2 sm:text-2xl lg:text-3xl">
          Best <span className="font-bold">Foods</span>
        </h1>
        <div className="hidden sm:flex items-center bg-gray-200 rounded-full p-1 text-[12px]">
          <button onClick={() => setPick(!pick)} className={`${pick ? "bg-black text-white rounded-full p-2" : "border-none"}`}>
            Delievery
          </button>
          <button onClick={() => setPick(!pick)} className={`${!pick ? "bg-black text-white rounded-full p-2" : "border-none"}`}>
            PickUp
          </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={18} />
        <input className="bg-transparent p-2 focus:outline-none w-full" type="text" placeholder="Search Food" />
      </div>

      <button onClick={() => setCart(!cart)} className="bg-black text-white hidden lg:flex items-center py-2 rounded-full">
        <BsFillCartFill size={15} className="mr-2" />
        Cart (0)
      </button>

      {nav ? <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}

      <div className={nav ? "fixed top-0 left-0 w-[260px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[260px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={25} className="absolute cursor-pointer  top-4 right-4" />
        <h2 className="text-xl p-4">
          Best <span className="font-bold">Foods</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={20} className="mr-3" />
              Orders
            </li>
            <li className="text-xl py-4 flex items-center">
              <AiFillHeart size={20} className="mr-3" />
              Favourites
            </li>
            <li className="text-xl py-4 flex items-center">
              <AiFillWallet size={20} className="mr-3" />
              Wallet
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdHelp size={20} className="mr-3" />
              Help
            </li>
            <li className="text-xl py-4 flex items-center">
              <AiFillTag size={20} className="mr-3" />
              Promotions
            </li>
            <li className="text-xl py-4 flex items-center">
              <BsFillSaveFill size={20} className="mr-3" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaUserFriends size={20} className="mr-3" />
              invite Friends
            </li>
          </ul>
        </nav>
      </div>

      <div className={cart ? "w-[350px] bg-white fixed  h-[2000px] top-0 right-0 duration-300 shadow-lg shadow-black" : "fixed right-[-100%] "}>
        <div onClick={() => setCart(!cart)} className="items-center border-2 border-black ">
          <AiOutlineDoubleRight size={30} className="ml-1 absolute rounded-full cursor-pointer top-4 hover:bg-orange-500 hover:text-white duration-400 hover:rounded-full transition all ease-in-out" />
          <h1 className="text-2xl px-14 py-3 text-orange-400 font-bold">Your Cart (1)</h1>
        </div>
        <div>
          <div className="h-[calc(100% - 100px)] scroll-my-14">
            {cartItems.map((data) => (
              <div>
                <div className="flex justify-between px-1 py-1 place-items-end w-full h-full">
                  <div className="mx-auto max-w-screen-xl px-2 py-2 sm:px-6 sm:py-1 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                      <div className="mt-8">
                        <ul className="space-y-4">
                          <li className="flex items-center gap-4">
                            <img className="w-20 rounded-lg  h-16" src={data.image} />

                            <div>
                              <h3 className="text-sm text-gray-900">{data.name}</h3>

                              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                  <dd className="">{data.category}</dd>
                                  <dt className="">
                                    Price : <span className="font-bold">${data.price}</span>
                                  </dt>
                                </div>
                              </dl>
                            </div>

                            <div className="">
                              <div className="flex">
                                <input onChange={handleInputChange} type="number" min="1" value={quantity} id="Line1Qty" className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                                <div className="flex flex-col">
                                  <button onClick={handleChangeAdd} className="border-none">
                                    +
                                  </button>
                                  <button onClick={handleChangeSub} className="border-none">
                                    -
                                  </button>
                                </div>
                              </div>

                              <button className="text-gray-600 transition hover:text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>

          <div className="mt-18 flex justify-end border-t border-gray-100 pt-8">
            <div className="w-screen max-w-lg space-y-4 ">
              <dl className="space-y-1.5 text-sm text-gray-700">
                <div className="flex gap-2">
                  <dt>Quantity : </dt>
                  <dd className="font-bold">1</dd>
                </div>

                <div className="flex gap-2  !text-base font-medium">
                  <dt>Total Amount : </dt>
                  <dd className="font-bold">$99</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

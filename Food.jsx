import React, { useState } from "react";
import { data } from "../data/data";
import { BiCartDownload } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
// import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Food = () => {
  const items = useSelector((state) => state.allCart.items);
  // const { data1 } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  // const handleAddToCart = (item) => {
  //   dispatch(addToCart(item));
  // };
  // const [foods, setFoods] = useState(data);

  // const filterType = (category) => {
  //   setFoods(
  //     data.filter((item) => {
  //       return item.category === category;
  //     }),
  //   );
  // };

  // const filterPrice = (price) => {
  //   setFoods(
  //     data.filter((item) => {
  //       return item.price === price;
  //     }),
  //   );
  // };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-10 mt-6 mb-6">
        <div>
          <p className="font-bold text-gray-700">Filter type</p>
          <div className="flex  flex-wrap">
            {/* onClick={() => setFoods(data)} */}
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">All</button>
            {/* onClick={() => filterType("burger")} */}
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">Burgers</button>
            {/* onClick={() => filterType("pizza")} */}
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">Pizza</button>
            {/* onClick={() => filterType("salad")} */}
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">Salad</button>
            {/* onClick={() => filterType("chicken")} */}
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">Chicken</button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {/* onClick={() => filterPrice(99)} */}
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">$99</button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">$199</button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">$299</button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 ">$399</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {items.map((item, index) => (
          <div key={item.id} className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
            <div className="relative group">
              <img className="w-full h-[200px] rounded-t-lg object-cover opacity-100 group-hover:opacity-75" src={item.image} alt={item.name} />

              <div className="absolute top-6 -right-6 group-hover:right-5 transition-all duration-300 p-2   opacity-0 group-hover:opacity-100 flex flex-col justify-center  ">
                <div className="flex justify-center items-center bg-red-500 border-none  w-14 h-12  text-white ">
                  {/* onClick={() => handleAddToCart(item)} */}
                  <button onClick={() => dispatch(addToCart(item))} className="w-10 border-none mr-7 active:text-green-400 ">
                    <BiCartDownload size={25} />
                  </button>
                </div>
                <div className="bg-white border-none   w-14 h-12 flex justify-center items-center">
                  <button className="border-none w-5 mr-4 ">
                    <BsEyeFill size={20} className="mr-96" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-2 py-4">
              <p>{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">$ {item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;

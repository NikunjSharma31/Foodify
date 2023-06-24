import React from "react";

const Headline = () => {
  // const { data1 } = useGetAllProductsQuery();
  return (
    <div className="">
      <div className="text-center text-orange-600 font-bold text-4xl">Best Friday Deals On Meals</div>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
        <div className="rounded-xl overflow-hidden relative">
          <div className="absolute w-full h-full rounded-xl text-white bg-black/50">
            <p className="font-bold text-2xl px-2 pt-4 ">Sun's out , BOGO's Out</p>
            <p className=" px-2  ">Through 9/12</p>
            <p className="px-3 py-9 font-bold  ">
              Best Offer Price @ <span className="text-orange-300  text-2xl">$349</span> only
            </p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://media.istockphoto.com/id/1337225688/photo/indian-food-sweet-ras-malai-in-a-modern-white-ceramic-bowl.jpg?b=1&s=612x612&w=0&k=20&c=lq3ZtrDnV_dUX6Njc7plplrVbFmwnjFw-kuLcTwYmDQ=" />
        </div>
        <div className="rounded-xl overflow-hidden relative">
          <div className="absolute w-full h-full rounded-xl text-white bg-black/50">
            <p className="font-bold text-2xl px-2 pt-4 ">New Restaurants</p>
            <p className=" px-2  ">Through 9/12</p>
            <p className="px-3 py-9 font-bold  ">
              Best Offer Price @ <span className="text-orange-300  text-2xl">$399</span> only
            </p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </div>
        <div className="rounded-xl overflow-hidden relative">
          <div className="absolute w-full h-full rounded-xl text-white bg-black/50">
            <p className="font-bold text-2xl px-2 pt-4 ">Sun's out , BOGO's Out</p>
            <p className=" px-2  ">Through 9/12</p>
            <p className="px-3 py-9 font-bold  ">
              Best Offer Price @ <span className="text-orange-300  text-2xl">$499</span> only
            </p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order Now</button>
          </div>
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </div>
      </div>
    </div>
  );
};

export default Headline;

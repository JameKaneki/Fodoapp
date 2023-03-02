import { useEffect, useState } from "react";

import Homebanner from "./img/Images.png";
import Categories from "./Layout/Categories";
import ContacctUsHomePage from "./Layout/ContactUsHomePage";
import Content from "./Layout/Content";

function HomePage() {
   const [content, setContent] = useState([]);
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("http://localhost:3000/Home")
         .then((res) => res.json())
         .then((post) => {
            setContent(post.content);
            setCategories(post.categories);
         });
   }, []);

   return (
      <div id="HomePage">
         <div className="lg:flex lg:flex-row-reverse my-5">
            <div className=" lg:w-1/2 mb-10 lg:m-0">
               <img src={Homebanner} alt="#" className="w-full" />
            </div>
            <div className="lg:w-1/2 my-auto lg:mr-10 ">
               <div className="block lg:block md:flex md:justify-around ">
                  <button className="bg-red-100 text-red-500 text-lg font-bold  py-2 px-4 rounded-lg">
                     Quality Food
                  </button>
               </div>
               <h1 className="text-center lg:text-left text-7xl leading-tight font-black  my-6  lg:mr-20">
                  Fastest<span className="text-red-500"> Delivery</span> & Easy{" "}
                  <span className="text-red-500">Pickup</span>
               </h1>
               <p className="text-center lg:text-left my-9 text-gray-700 text-lg">
                  Best cooks and best delivery guys all at your service. Hot
                  tasty food will reach you in 60 minutes.
               </p>
               <div className="flex justify-between mx-2  border border-red-500 rounded-xl md:mx-auto md:w-3/4 lg:w-3/4 lg:ml-0   ">
                  <input
                     className="p-4 mx-2 w-2/3"
                     placeholder="Enter your delivery location"
                  />
                  <label className="p-4 rounded-lg rounded-l-none w-1/4 bg-red-500 text-white  ">
                     Discover
                  </label>
               </div>
            </div>
         </div>
         <Content prop={content} />
         <Categories prop={categories} />
         <ContacctUsHomePage />
      </div>
   );
}
export default HomePage;

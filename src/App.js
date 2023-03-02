import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import HomePage from "./component/HomePage";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Logo from "./component/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

function App() {
   const ShowMenu = () => {
      const element = document.querySelector("#menu");
      element.classList.toggle("hidden");
      console.log("1");
   };
   return (
      <div
         id="app"
         className="lg:w-full xl:w-10/12 xl:mx-auto mx-2 lg:mx-5 my-10 "
      >
         {/* nav menu  */}
         <nav className="flex justify-between relative mb-10">
            <div>
               <Link to="/">
                  {" "}
                  <img src={Logo} alt="#" />
               </Link>
            </div>
            <div className="lg:hidden" onClick={() => ShowMenu()}>
               <FontAwesomeIcon
                  icon={faBars}
                  className="text-2xl cursor-pointer"
                  id="showNav"
               />
            </div>
            <ul
               className="lg:relative lg:flex font-medium text-lg text-gray-700 hidden"
               id="menu"
            >
               <li className="my-auto  lg:ml-7">
                  {" "}
                  <Link to="/">Home</Link>
               </li>
               <li className="my-auto  lg:ml-7">
                  {" "}
                  <Link to="/AboutUs">AboutUs</Link>
               </li>
               <li className="my-auto  lg:ml-7">
                  {" "}
                  <Link to="/Contact">Contact</Link>
               </li>
               <li className="my-auto  lg:ml-7">
                  {" "}
                  <Link to="/Product">Product</Link>
               </li>

               <button className=" lg:ml-5 mr-2 py-1 px-2 rounded-lg bg-red-400 text-white">
                  <Link to="/SignUp">Sign Up</Link>
               </button>
               <button className=" lg:ml-5 mr-2 py-1 px-2 rounded-lg border-red-400 border-2 text-red-400">
                  <Link to="/SignIn">Sign In</Link>
               </button>
            </ul>
         </nav>
         {/* Router  */}
         <Routes>
            <Route index element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
         </Routes>

         {/* footer menu  */}
         <nav className="flex justify-between my-10 border-t pt-5">
            <div>
               <Link to="/">
                  {" "}
                  <img src={Logo} alt="#" className="w-full" />
               </Link>
            </div>
            <div className="block md:hidden lg:hidden">
               <h2>Fodo for your heart</h2>
            </div>
            <ul className="lg:flex md:flex font-medium text-lg text-gray-700 hidden ">
               <li className="my-auto ml-7">
                  {" "}
                  <Link to="/">Home</Link>
               </li>
               <li className="my-auto ml-7">
                  {" "}
                  <Link to="/AboutUs">AboutUs</Link>
               </li>
               <li className="my-auto ml-7">
                  {" "}
                  <Link to="/Contact">Contact</Link>
               </li>
               <li className="my-auto ml-7">
                  {" "}
                  <Link to="/Product">Product</Link>
               </li>
            </ul>
         </nav>
      </div>
   );
}

export default App;

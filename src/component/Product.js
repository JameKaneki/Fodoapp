import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Product() {
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Product")
      .then((res) => res.json())
      .then((post) => {
        setCategories(post.categories);
        setContent(post.content);
      });
  }, []);
  return (
    <div>
      <div className="mb-5">
        <img
          src="https://res.cloudinary.com/dwohqjquz/image/upload/v1677424963/Rectangle_1372_n66yp0.png"
          alt="@"
          className="w-full"
        ></img>
      </div>
      <div className="block lg:flex lg:justify-between">
        <ul className="xl:w-1/4 lg:w-1/6 flex flex-wrap  lg:block">
          {categories.map((item, index) => (
            <li className="block my-2 mx-3 lg:mx-0 btn" key={index}>
              <Link path="" className="font-medium text-xl">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full xl:w-3/4 lg:w-5/6 flex flex-wrap  height-fit">
          {content.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full xl:w-1/3 lg:w-1/3 px-2 lg:px-4 flex flex-col justify-between mb-10 "
              >
                <img
                  src={item.img}
                  alt="@"
                  className="w-full rounded-xl my-2 mx-auto"
                />
                <p className="text-slate-900 font-bold text-base mb-5">
                  {item.name}
                </p>
                <p className="text-red-500 font-bold text-lg mb-5">
                  {item.price} $
                </p>
                <button className="bg-slate-900 w-full text-white text-center p-1 rounded-lg font-medium ">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Product;

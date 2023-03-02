// import { useState } from "react"


export default function Categories({prop}) {
 

    return(
        <div>
            <div className="flex justify-between my-10">
                <h2 className="text-4xl font-bold ">Categories</h2>
                <button className="font-medium  text-red-500 border rounded-lg border-red-500 p-3 lg:p-5">View All Categories</button>
            </div>
            <div className="flex justify-between flex-wrap">
                {prop.map((item,index)=>{
                    return(
                        <div key={index} className="w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
                            <img src={item.img} alt="#" className="mx-auto"/>
                            <p className="text-center my-4 font-bold">{item.name}</p>
                        </div>
                        
                    )
                } )}
            </div>
        </div>

    )
};

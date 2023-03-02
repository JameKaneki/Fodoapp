

function Content({prop}){
  
    return(
        <div className="" id="content">
         <div className="my-10 text-center">
            <h2 className="text-6xl font-black my-5">Our Popular Dishes</h2>
            <p className="text-lg text-gray-700 mx-4 lg:w-2/3  lg:mx-auto ">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className="flex flex-wrap justify-between">
            {prop.map((item,index)=>{
                return(
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 my-4  px-4 ">
                        <img src={item.img} alt="@" className="rounded-2xl w-full"/>
                        <p className="text-lg font-medium text-red-500 my-5">{item.name}</p>
                    </div>
                )
            } )}
        </div>
       </div>
    )
}

export default Content

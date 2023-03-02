
function ContacctUsHomePage(){
  
        return(
        <div  className="form ">
            <h2  className="text-center text-4xl font-bold my-10">Contact Us</h2>
            <div  className="form-wrap flex flex-wrap">

                <form action=""  className="form-content p-2  w-full lg:w-1/2">
                     <label htmlFor="name">NAME</label>
                      <input  className="my-2 border border-gray-300 w-full p-4" type="text" name="name" id="name" placeholder="Enter your name"/>
                </form>
                <form action=""  className="form-content p-2  w-full lg:w-1/2">
                   <label htmlFor="email">EMAIL ADDRESS</label>
                    <input  className="my-2 border border-gray-300 w-full p-4" type="text" name="email" id="email" placeholder="Enter your email address"/>
                </form>
                <form action=""  className="form-content p-2  w-full lg:w-1/2">
                    <label htmlFor="subject">SUBJECT</label>
                    <input  className="my-2 border border-gray-300 w-full p-4" type="text" name="subject" id="subject" placeholder="Enter subject"/>
                </form>
                <form action=""  className="form-content p-2  w-full lg:w-1/2">
                    <label htmlFor="enquiryType">ENQUIRY TYPE</label>
                    <input  className="my-2 border border-gray-300 w-full p-4" type="select" name="enquiryType" id="enquiryType" placeholder="Advertising"/>
                </form>
                <form action=""  className="form-content p-2  w-full full">
                    <label htmlFor="messages">MESSAGES</label>
                    <input  className="my-2 border border-gray-300 w-full p-4 pb-20" type="text" name="messages" id="messages" placeholder="Enter your messages"/>
                </form>
            </div >
            <div className="text-center">
               <input type="submit" className="cursor-pointer bg-black text-white py-2 px-6 rounded-xl"/>
            </div>
        </div>
        )
 
}
export default ContacctUsHomePage
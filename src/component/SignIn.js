import { Link } from "react-router-dom"
import Logo from "./img/Logo.png"

function SignIn(){


    return(
        <div className="bg-white w-full h-screen absolute inset-0"  id="SignIn-wrapper">
            <div className="w-fit box-border text-slate-800 mx-auto my-auto lg:my-24 p-10 ">
                <div className="flex mb-24 mx-auto">
                    <Link to='/' className="mx-auto">  <img src={Logo} alt="#"/></Link>
                </div>  
                <div className="mb-10 text-center ">
                    <p className="text-base font-bold">Welcome black</p>
                    <h3 className="text-3xl font-black">Login to your account</h3>
                </div>
                <form className="">
                    <div className="mb-5 w-96 flex flex-wrap">
                        <label className="text-base font-medium mb-2 w-full" htmlFor="Email">Email</label>
                        <input id="username" name="Email" placeholder="Enter your email" className="w-full border border-cyan-500 rounded-xl text-base p-3"  />
                    </div>
                    <div className="mb-5 w-96 flex flex-wrap">
                        <label className="text-base font-medium mb-2 w-full" htmlFor="Password">Password</label>
                        <input id="password" name="Password" placeholder="Enter your Password" className="w-full border border-cyan-500 rounded-xl text-base p-3"  />
                    </div>
                    <div className="w-full mb-10">
                    <button className=" text-base font-medium text-white bg-cyan-500 w-full p-3 rounded-lg mb-3" type="submit">Login now</button>
                    <button className=" text-base font-medium  text-white bg-slate-800 w-full p-3 rounded-lg">Or sign-in with google</button>
                </div>
                </form>
               
                <div className="text-center">
                    <p className="text-base font-bold text-cyan-500">Forgot password?</p>
                    <p className="text-base font-bold text-gray-500"> Dont have an account? <span className="text-cyan-500">Join free today</span></p>
                </div>
            </div>

        </div>
    )
}
export default SignIn
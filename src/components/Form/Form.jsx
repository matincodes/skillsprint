import React from "react"
import { PencilLine } from "lucide-react"

     const Form = () =>{
          return (
     <form className="w-full font-inter space-y-[60px]">
         <div className="grid gap-6">
           {/* First Name */}
           <div className="grid w-full items-center gap-3">
          <label htmlFor="firstName" className="font-[300] text-[14px]">First Name</label>
               <div className="border-b border-[#282828] flex py-[9px]">
                    <input type="text" id="firstName" placeholder="Sophia" className="basis-[95%] placeholder:text-[#525866] font-[600] text-[14px] focus:border-none focus:outline-none px-2" />
                    <PencilLine className="text-main cursor-pointer"/>
               </div>
          </div>
          {/* First Name */}

          {/* last Name */}
          <div className="grid w-full items-center gap-3">
          <label htmlFor="lastName" className="font-[300] text-[14px]">Last Name</label>
               <div className="border-b border-[#282828] flex py-[9px]">
                    <input type="text" id="lastName" placeholder="Williams" className="basis-[95%] placeholder:text-[#525866] font-[600] text-[14px] focus:border-none focus:outline-none px-2" />
                    <PencilLine className="text-main cursor-pointer"/>
               </div>
          </div>
          {/* First Name */}

          {/* email */}
          <div className="grid w-full items-center gap-3">
          <label htmlFor="email" className="font-[300] text-[14px]">Email Address</label>
               <div className="border-b border-[#282828] flex py-[9px]">
                    <input type="text" id="email" placeholder="Sophiawilliams77@gmail.com" className="basis-[95%] placeholder:text-[#525866] text-[14px] font-[600] focus:border-none focus:outline-none px-2" />
                    <PencilLine className="text-main cursor-pointer"/>
               </div>
          </div>
          {/* email */}
         </div>

          <div className="">
               <button  className="border font-[400] duration-300 ease-in-out lg:text-[15px] text-[12px] lg:px-14 px-5 py-2 hover:bg-main hover:text-white hover:border-main cursor-pointer text-main rounded-[7px] flex gap-4 items-center">Save Changes</button>
          </div>
     </form>
          )
     }

     export default Form
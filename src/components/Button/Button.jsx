import React from "react";
import { Link } from "@tanstack/react-router"

const Button = (e) =>{
     return(
          <Link to={`${e.location ? `/${e.location}` : '/'}`} className={`${e.nav ? 'text-main border hover:border-main px-[17px] ease-in-out py-[6px] text-center  rounded-[5px] hover:bg-main hover:text-white' : 'text-white bg-main px-[30px] py-[10px] text-[15px] rounded-[9px]'}`}>
          <p> {e.text} </p>
        </Link>
     )
}

export default Button
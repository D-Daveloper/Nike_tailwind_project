import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Nav = () => {

    const [nav,setNav] = useState(false)
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29} 
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item,index)=> (
                    <li key={item.label}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div onClick={()=>{
                    if (!nav) {
                        setNav(true)
                    }else{
                        setNav(false)
                    }
                }} className={"lg:hidden relative top-0 bottom-0 w-8 h-8 items-center flex" + (nav? ' toggle-btn': '')}>
                <div className="nav"></div>
            </div>
        </nav>
    </header>
  )
}

export default Nav;
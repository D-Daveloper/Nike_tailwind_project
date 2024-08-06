import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Nav = ({index,set}) => {
  const [hasinteracted, setHasinteracted] = useState(false);
  

    return (
    <header className=" absolute z-10 w-full overflow-hidden">
        <nav className="flex justify-between items-center max-container padding-x py-8">
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
            <div id="menu-btn" onClick={()=>{
                 set(!index)
                 setHasinteracted(true)
                }} className={"lg:hidden relative top-0 bottom-0 w-8 h-8 items-center flex z-30" + (index? ' toggle-btn': '')}>
                <div className="nav">
                    
                </div>
            </div>

        </nav>
        <div className={"w-[40%] ml-auto -top-24 h-dvh relative z-20 bg-coral-red translate-x-full" + ( hasinteracted? ( index? ' flex animate-open-menu' :'  animate-close-menu '): '')}>
            <ul className="pt-16 flex flex-col gap-16 mt-16 w-[100%] absolute z-20 items-center h-dvh">
            {navLinks.map((item,index)=> (
                <li key={item.label}>
                    <a href={item.href} className="font-montserrat leading-normal text-lg text-white">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
         </div>
    </header>
  )
}

export default Nav;
import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import { navLinks } from "../constants/index";

const Nav = () => {
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
            <div className="lg:hidden block ">
                <div className="w-10 h-1 bg-slate-gray before:w-10 before:h-1 before:translate-y-4 before:content-[''] before:translate-x-0 before:absolute before:bottom-12 before:bg-slate-gray after:w-10 after:h-1 after:-translate-y-4 after:content-[''] after:translate-x-0 after:absolute after:top-12 after:bg-slate-gray "></div>
            </div>
        </nav>
    </header>
  )
}

export default Nav;
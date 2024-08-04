import { arrowRight } from "../assets/icons"
const Button = ({label,border,color,icon,width}) => {
  return (
    <button className={"flex gap-1 px-7 py-4 font-montserrat leading-none text-lg rounded-full " + (border? 'border border-slate-gray' : '') + (color? 'bg-coral-red hover:bg-[#EA4411] text-white' :  ' ' ) + ( width? ' w-full justify-center': '')}>
        {label}

        {icon? <img src={arrowRight} alt="" className=""/> : ""}
    </button>
  )
}

export default Button
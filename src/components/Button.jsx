
const Button = ({label,border,color}) => {
  return (
    <button className={"px-7 py-4 font-montserrat leading-none text-lg rounded-full " + (border? 'border border-slate-gray' : '') + (color? 'bg-coral-red' :  '')}>
        {label}
    </button>
  )
}

export default Button
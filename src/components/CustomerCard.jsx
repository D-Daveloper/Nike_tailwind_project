import { star } from "../assets/icons"

const CustomerCard = ({text}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={text.imgURL} alt="" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm text-center info-text">
            {text.feedback}
        </p>
        <div className="flex gap-2.5 mt-4">
            <img src={star} alt="" />
            <p className="leading-normal text-xl">({text.rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{text.customerName}</h3>
    </div>
  )
}

export default CustomerCard
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <div className="flex gap-8 wide:flex-row flex-col-reverse">
      <div className="flex flex-1 items-center justify-center">
        <img src={offer} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h2 className="font-semibold font-palanquin leading-normal text-4xl text-coral-red capitalize">special
          <span className="text-black"> offer</span>
        </h2>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-10 flex gap-5">
          <div className="flex bg-coral-red rounded-full text-white items-center">
            <Button label="show now"
            />
            <img src={arrowRight} alt="" className="-ml-3 mr-5 w-5 h-5 "/>
          </div>
          <div className="">
            <Button label={"view more"}
            border={true}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer
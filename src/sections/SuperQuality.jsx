import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">we provide you <span className="text-coral-red">super qaulity </span>shoes</h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and stlye, meticulously crafted footwear is designed to elevate your experience, providing you with unmatched qaulity, innovation and a touch of elegance</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satification</p>
        <div className="mt-11 text-white">
          <Button 
          label={"View details"}
          color={true}/>
        </div>

      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="" 
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </div>
  )
}

export default SuperQuality
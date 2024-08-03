import ServicesCard from "../components/ServicesCard"
import { services } from "../constants"
const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((item,index) => {
        return(
        <ServicesCard key={index}
        image={item.imgURL}
        text={item.label}
        para={item.subtext}
        />
      )})}
    </div>
  )
}

export default Services
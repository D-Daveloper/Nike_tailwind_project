import CustomerCard from "../components/CustomerCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h2 className="font-palanquin text-center text-4xl font-bold capitalize">what our <span className="text-coral-red">customers</span> say</h2>
      <p className="m-auto mt-4 max-w-lg  text-center info-text ">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((items,index)=> {
          return(
            
            <CustomerCard 
            key={index}
            text={items}/>
          )
        })}
      </div>
    </div>
  )
}

export default CustomerReviews
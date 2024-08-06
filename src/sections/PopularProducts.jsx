import { star } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Card from "../components/Card"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <div className="max-container">
      <h1 className="text-4xl font-palanquin font-bold">Our<span className="text-coral-red font-bold "> Popular</span> Products</h1>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
        Experience top-notch qaulity and style with our sought-after selections. Discover a world of comfort, design and valueu
      </p>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((item,index)=>{
          return (
            <Card key={index} values={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default PopularProducts
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import FooterCard from "../components/FooterCard";

socialMedia
const Footer = () => {
  return (
    <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
      <div className="flex flex-col">
        <img className="" src={footerLogo} alt="" width={150} height={46}/>
        <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-start sm:max-w-sm">
          {socialMedia.map((item,index)=>{
            return(
              <img src={item.src} alt={item.alt} width={30} height={30} />
            )
          })}
        </div>
      </div>

      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((item,index) =>{
          return(<FooterCard text={item.title} links={item.links} />)
        })}


      </div>
    </div>
  )
}

export default Footer
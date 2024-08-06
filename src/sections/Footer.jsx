import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import FooterCard from "../components/FooterCard";
import { copyrightSign } from "../assets/icons";

socialMedia
const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col">
          <img className="" src={footerLogo} alt="" width={150} height={46}/>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
            <div className="flex gap-5">

            {socialMedia.map((item,index)=>{
              return(
                <div key={index} className="flex bg-white rounded-full mt-5 w-12 h-12 justify-center items-center">
                <img key={index} className="" src={item.src} alt={item.alt} width={30} height={30} />
                </div>
              )
            })}

          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((item,index) =>{
            return(<FooterCard key={index} text={item.title} links={item.links} />)
          })}


        </div>
      </div>
      <div className="text-white-400 flex justify-between items-center mt-20 text-base font-montserrat max-sm:flex-col">
        <div className="flex gap-3">
          <img src={copyrightSign} alt="copyright Sign" />
        <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
      </div>
  )
}

export default Footer
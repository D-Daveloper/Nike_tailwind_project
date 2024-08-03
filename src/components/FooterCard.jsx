const FooterCard = ({text, links}) => {
  return (
    <div className="flex flex-col">

        <h3 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">{text}</h3>
        {links.map((item,index)=> {
            return(
            <a className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray" key={index} href={item.link}>{item.name}</a>
        )
        })}
    </div>
  )
}

export default FooterCard
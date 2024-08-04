import Button from "../components/Button"
const Subcribe = () => {
  return (
    <div className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h2 className="font-palanquin text-4xl leading-normal font-bold ">Sign Up for <span className="text-coral-red">Updates </span> & Newsletter</h2>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full text-center">
        <input type="text" className="input" placeholder="subscribe@nike.com"/>
          <div className="flex max-sm:justify-center justify-center items-center max-sm:w-full"> 

            <Button
            label={"Sign up"}
            color={true}
            width={true}
            
            />
                    </div>
      </div>
    </div>
  )
}

export default Subcribe
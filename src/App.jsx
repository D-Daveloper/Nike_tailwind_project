import { Hero,Footer,SpecialOffer,SuperQuality,CustomerReviews,Subcribe,PopularProducts,Services } from "./sections";
import Nav from "./components/Nav";
import { useState,useEffect } from "react";



const App = () => {
  const [index,setIndex] = useState(false)
    useEffect(() => {
      if (index) {
        document.body.classList.add('stop-scrolling');
      } else {
        document.body.classList.remove('stop-scrolling');
      }
  
      return () => {
        document.body.classList.remove('stop-scrolling');
      };
    }, [index])

  return (
  <main className="relative">

    <Nav 
    index={index}
    set={setIndex}
    />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero 

      />
    </section>
    <section id="products" className="xl:padding-l wide:padding-r padding-b padding-x py-8 w-full">
      <PopularProducts />
    </section>
    <section id="quality" className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section id="contact-us" className="padding sm:py-32 py-16 w-full">
      <Subcribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
)
};

export default App; 
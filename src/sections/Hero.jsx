import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { shoes,statistics } from "../constant"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id="home"
    className="w-full gap-10 max-container flex xl:flex-row flex-col justify-center min-h-screen">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="font-montserrat text-xl text-coral-red">Our Summer Collection</p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text[72px] max-sm:leading-[82] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap realtive z-10 pr-10">The New Arrival</span>
            <br/>
            <span className=" text-coral-red inline-block mt-3 ">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike
            arrivals,quality comfort,
            and innovation for your
            active life.</p>
            <Button label="Shop Now"
            iconURL={arrowRight}
            />
            <div className="flex justify start items-start flex-wrap w-full mt-20 gap-16">
              {statistics.map((stat)=>(
                <div key={stat.label}>
                  <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                  <p className="leading-7 font-montserrat text-slate-gray ">{stat.label}</p>
                </div>
              ))}

            </div>
        </div>
        <div className=" flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src={bigShoeImg} alt="shoe" width={610} height={500} className="object-contain relative z-10"/>
          <div className="flex sm:gap-6 gap-4 absolute bottom-[80%] sm:left-[52%] max-sm:px-6 ">
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={(shoe)=> setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}/>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Hero

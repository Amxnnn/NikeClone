import { star } from "../assets/icons"
const PopularProductCard = ({imgURL,name,price
}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL}
        className="w-[300px] h-[300px]"/>
        <div className="mt-8 flex justify-start gap-2.5">
            <img className="py-1" src={star} alt="rating" width={24} height={24}/>
            <p className="text-xl py-1 leading-nomral font-montserrat text-slate-gray">(4.5)</p>
        </div>
        <div className="  gap-2.5">
            <h3 className="mt-2 text-2xl leading-nomral font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-nomral">{price}</p>
        </div>
    </div>
    
  )
}

export default PopularProductCard

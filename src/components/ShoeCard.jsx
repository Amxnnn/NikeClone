
const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
    const handleClick=()=>{
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg === imgURL.bigShoe
        ? 'border-coral-red':'border-transparent'
    } cusror-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
        <div className="flex justify-center  items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
            <img
            src={imgURL.thumbnail}
            alt="shoes collection"
            height={103}
            width={127}
            className="object-contsain"/>
        </div>
      
    </div>
  )
}

export default ShoeCard

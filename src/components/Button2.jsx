
const Button2 = ({label,iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full text-slate-gray border-slate-gray">
    {label}
    {iconURL &&<img src={iconURL}
    alt="Arrow right icon"
    className="ml-2 rounded-full w-5 h-5 "/>}
  </button>
  )
}

export default Button2

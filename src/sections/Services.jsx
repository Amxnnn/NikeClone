import ServiceCard from "../components/ServiceCard"
import { services } from "../constant"
const Services = () => {
  return (
    <section className="flex max-container justify-center  flex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard key={service.label}{...service}/>
      ))}
    </section>
  )
}

export default Services

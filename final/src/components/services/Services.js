import { services } from '../../data'
import Title from '../title/Title'
import Service from './Service'

const Services = () => {
  return (
    <section className='section' id='services'>
      <Title title='our' subTitle='services' />
      <div className='section-center service-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}
export default Services

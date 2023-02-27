import { clients } from '../../data'
import Title from '../title/Title'
import Client from './Client'

const Clients = () => {
  return (
    <section className='section clients' id='clients'>
      <Title title='our' subTitle='clients' />

      <div className='section-center clients-center'>
        {clients.map((client) => {
          return <Client {...client} key={client.id} />
        })}
      </div>
    </section>
  )
}
export default Clients

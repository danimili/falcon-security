const Client = ({ icon, title, text }) => {
  return (
    <article className='client'>
      <span className='client-icon'>
        <i className={icon}></i>
      </span>
      <div className='client-info'>
        <h4 className='client-title'>{title}</h4>
        <p className='client-text'>{text}</p>
      </div>
    </article>
  )
}
export default Client

const Service = ({ image, title, info, about, summary }) => {
  return (
    <article className='service-card'>
      <div className='service-img-container'>
        <img src={image} className='service-img' alt={title} />
      </div>
      <div className='service-info'>
        <div className='service-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='service-footer'>
          <p>
            <span>
              <i className='fas fa-info'></i>
            </span>
            {about}
          </p>
          <p>{summary}</p>
        </div>
      </div>
    </article>
  )
}
export default Service

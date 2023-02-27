import Title from '../title/Title';
import aboutImg from '../../images/about.jpeg'

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='about' />
        </div>
        <article className='about-info'>
          <h3>Your trusted partner in website security</h3>
          <p>
          We provide comprehensive cyber services to protect your online assets from potential threats and vulnerabilities. Our team of experienced professionals works closely with you to identify potential risks and develop a customized plan to keep your website secure.
          </p>
          <p>
          Our services include website security assessments, penetration testing, vulnerability scanning, and more. We stay up-to-date on the latest threats and use advanced technologies to give you peace of mind knowing that your business is protected.
          </p>
          <p>Choose Falcon Security for all your website security needs and let us safeguard your online assets.</p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;

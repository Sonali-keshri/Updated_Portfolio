import React from 'react'
import './about.css'
import ME from '../../assests/about.jpg';


const about = () => {
  return (
    <section id="about" >
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt='About img'/>
          </div>
        </div>
      

        <div className="about_content">

          <p>
          Recent Garduate in BTech Computer Science. Also a Software Developer with 7 months of experience in creating user-friendly interfaces using React.js and Redux. Designed and maintained the previous company's websites and application that increased user engagement by 15%. Quick to learn new technologies, recently mastered Nodejs and Nextjs in 6 months to support backend development.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about

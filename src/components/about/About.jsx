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
            I'm a last-year student of Computer Science from Sri Venkateswara College of Engineering and Technology, Chittoor.<br />
            I have a strong understanding of HTML, CSS, and JavaScript and experience with JavaScript framework such as React.js.<br />
            I am passionate about staying up to date with the latest trends and advancements in web development and constantly seeking new challenges to improve my skills.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about

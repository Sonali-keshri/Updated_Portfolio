import React from "react";
import "./portfolio.css";
import project1 from "../../assests/crudapp.png";
import project2 from "../../assests/chatapp_home.png";
import project3 from '../../assests/hackthon_Submission.png'
import project4 from "../../assests/weatherapp.png";
import project5 from "../../assests/product_cart.png";
import project6 from "../../assests/text-utilizer.png";
// import project5 from "../../assests/todoapp.png";
import project7 from "../../assests/landingPage.png";
import project8 from "../../assests/newsapp.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: project1,
      title: "User Management App using CRUD Operation",
      github: "https://github.com/Sonali-keshri/crud_Operation",
      demo: "https://crudapp-auth.netlify.app",
    },
    {
      id: 2,
      image: project2,
      title: "Real Time ChatApp using MERN",
      github: "https://github.com/Sonali-keshri/greenChatApp_Api",
      demo: "https://myoriginalchatapp.netlify.app",
    },
    {
      id: 3,
      image: project3,
      title: "Hackthon Submission app to sumbit hackthon project",
      github: "https://github.com/Sonali-keshri/AI-Planet",
      demo: "https://hackthon-submission.netlify.app/",
    },
    {
      id: 4,
      image: project4,
      title: "Weather App we can see the temparature of any place",
      github: "https://github.com/Sonali-keshri/weatherApp",
      demo: "https://snowaweatherapp.netlify.app",
      
    },
    {
      id: 5,
      image: project5,
      title: "Product cart App to place an order",
      github: "https://github.com/Sonali-keshri/Product_Cart_APP",
      demo: "https://sonali-productcart.netlify.app/",
    },
    {
      id: 6,
      image: project6,
      title: "Text-Changer to manipulate the text",
      github: "https://github.com/Sonali-keshri/Text-changer",
      demo: "https://text-changerapp.netlify.app",
    },
    {
      id: 7,
      image: project7,
      title: "Responisive Landing Page using Bootstrap",
      github: "https://github.com/Sonali-keshri/LandingPage",
      demo: "https://intelthinkpage.netlify.app/",
    },
    {
      id: 8,
      image: project8,
      title: "Daily News App by using fetchApi And API used here from NewsApi",
      github: "https://github.com/Sonali-keshri/NewsApp",
      demo:"",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container ">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={image} alt={title} />
              </div>
              <h3 style={{height:"70px"}}>{title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  target="__blank"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="__blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

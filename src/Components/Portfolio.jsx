/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desktop.jpg";

const imageAltText = "desktop with laptop and books";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Dynamic 3D-Website",
    description:
      "Discover our website's charm! I used HTML, CSS, JavaScript, and GSAP with smooth locomotive scrolling for a delightful and engaging user experience.",
    url: "https://dhananjayyedlabadkar.github.io/3D-Website/",
  },
  {
    title: "Weather App",
    description:
      "Introducing my weather app—where forecasts come to life! Experience dynamic animations that bring weather updates to a whole new level.",
    url: "https://dhananjayyedlabadkar.github.io/WeatherApp/",
  },
  {
    title: "Portfolio",
    description:
      "Frontend Developer, with knowledge in web development and design, I offer the best projects resulting in quality work",
    url: "https://dhananjayyedlabadkar.github.io/Portfolio-website/",
  },
  {
    title: "Todo App",
    description:
      "Meet my sleek Todo app, designed for simplicity and effortless interaction. Experience a seamless UI for hassle-free task management",
    url: "https://dhananjayyedlabadkar.github.io/Portfolio-website/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

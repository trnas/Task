import PropTypes from "prop-types";

import "./Carousel.css";
import { modern, exterior, grey, plant, furni } from "../assets";

const BLOGS = [
    {
        src: modern,
        alt:"Modern Interior",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
    },
    {
        src: exterior,
        alt:"Exterior Project",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
    },
    {
        src: grey,
        alt: "Grey Beauty",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
    },
    {
        src: plant,
        alt: "Plantation Interior",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
    },
    {
        src: furni,
        alt: "Indoor Furniture",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
    }
]


function Carousel() {

  

  return (
    <div className="blogs">
      <h1 className="h1">Blogs</h1>
      <div className="flex">
        {BLOGS?.map((slide, idx) => (
          <div className="child" key={idx}>
            <img src={slide.src} alt="" />
            <h1>{slide.alt}</h1>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button className="btn">View all</button>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
};

export default Carousel;

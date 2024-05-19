import "./Footer.css";

import { landLogo, fb, linkedin, twitter, utube, ig } from "../assets";

function Footer() {
  const socialMediaIcons = [fb, linkedin, twitter, utube, ig];
  const whatWeDo = [
    "Interior Design",
    "Kitchen",
    "Ceiling",
    "Bedroom",
    "Smart Home",
  ];
  const navigationLinks = ["About", "Projects", "Studio", "Blog", "Contact"];
  return (
    <footer className="footer">
      <div className="ftdiv1">
        <section className="imgNp">
          <img src={landLogo} className="logo1" />
          <p className="paragraph">
            We introduce our selves as LAND Interior and Architectural Design
            Consultancy – one of the best interior designers in Chennai. Chennai
            Luxury Interior and Architectural Design Consultancy has challenged
            the conventional way of interior designing and given new dimensions
            to the art of interior designing.
          </p>
        </section>
        <div className="what_we_do">
          <div className="what_we_do_header">WHAT WE DO</div>
          <section className="what_we_do_section">
            {whatWeDo.map((item) => (
              <div className="what_we_do_item" key={item}>
                {item}
              </div>
            ))}
          </section>
        </div>
        <div className="get_in_touch">
          <div className="get_in_touch_header">Get in touch</div>
          <p>landinteriors@gmail.com</p>
          <p>+201000000000</p>
        </div>
      </div>
      <div className="ftdiv2">
        <div className="social_media">
          {socialMediaIcons.map((icon) => (
            <div className="social_media_icon" key={icon}>
              <img src={icon} />
            </div>
          ))}
        </div>
        <div className="navigation_links">
          {navigationLinks.map((link) => (
            <a href="" className="navigation_link" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="ftmob">
        <img src={landLogo} className="logo1" />
        <div className="">
          <p>landinteriors@gmail.com</p>
          <p>+201000000000</p>
        </div>
        <div className="">
          <div className="social_media">
            {socialMediaIcons.map((icon) => (
              <div className="social_media_icon" key={icon}>
                <img src={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

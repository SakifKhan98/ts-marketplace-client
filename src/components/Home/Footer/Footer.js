import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "Categories", link: "/categories" },
    { name: "Projects", link: "/projects" },
    { name: "Local Jobs", link: "/local-jobs" },
    { name: "Show Case", link: "/show-case" },
    { name: "Check Up", link: "/checkup" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
    { name: "Call Now - +2025550295" },
  ];
  const about = [
    { name: "About Us", link: "/about-us" },
    { name: "Partners", link: "/partners" },
    { name: "Investors", link: "/investors" },
    { name: "Developers", link: "/Developers" },
    { name: "Security", link: "/Security" },
    { name: "Quotes", link: "/quotes" },
    { name: "News", link: "/news" },
  ];
  const terms = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Copyright Policy", link: "/copyright" },
    { name: "Terms & Conditions", link: "/terms-conditions" },
    { name: "Code of Conduct", link: "/code-of-conduct" },
    { name: "Fees & Charges", link: "/fees" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"Teacher"} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Terms" menuItems={terms} />
          <FooterCol key={3} menuTitle="About Us" menuItems={about} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
          </FooterCol>
        </div>
        <div className="copyRight text-center text-white">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

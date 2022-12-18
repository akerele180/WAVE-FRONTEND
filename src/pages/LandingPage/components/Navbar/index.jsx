import React from "react";
import { NavLink, Link } from "react-router-dom";
import { NavbarData } from "../../../../utils/constants/NavbarData";
import "../../../../utils/constants/NavbarData.style.css";
import WaveLogo from "../../../../assets/images/Wave-Logo.png";
import "./Navbar.style.css";
import "../../HomePage/Button.style.css";
import { MdClose, MdMail, MdMenu, MdLocalPhone } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const handleMobileMenuToggle = () => setMenu((menu) => !menu);
  return (
    <header className="flex justify-between items-center h-[80px] relative">
      <div className="logo">
        <a href="/">
          <img src={WaveLogo} alt="" className="" />
        </a>
      </div>
      <nav className="flex items-center">
        <ul className="md:flex justify-around flex-1 hidden">
          {NavbarData.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`${item.path}`}
                className="px-3 py-4 hover:text-secondary-dark"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          onClick={handleMobileMenuToggle}
          className={`md:hidden cursor-pointer text-secondary-dark ${
            menu ? "mobile__open" : "mobile__close"
          }`}
        >
          <MdMenu size={40} />
        </div>
      </nav>

      <nav
        className={` px-[5vw] fixed z-20 bg-[#fff] left-0 right-0 top-0 bottom-0 delay-50 transition ease-in duration-300 ${
          !menu ? "opacity-100" : "opacity-100 translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-[80px] py-[5px]">
          <div className="logo">
            <img src={WaveLogo} alt="" className="" />
          </div>
          <MdClose
            size={40}
            onClick={handleMobileMenuToggle}
            className="text-secondary-dark font-bold cursor-pointer"
          />
        </div>
        <ul>
          <li
            className="leading-20 py-2 text-xl text-center hover:text-secondary-dark hover:translate-x-1 ease-linear duration-150"
            onClick={() => setMenu(true)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="leading-20 py-2 text-xl  text-center hover:text-secondary-dark hover:translate-x-1 ease-linear duration-150"
            onClick={() => setMenu(true)}
          >
            <Link to="/about-us">About Us</Link>
          </li>
          <li
            className="leading-20 py-2 text-xl  text-center hover:text-secondary-dark hover:translate-x-1 ease-linear duration-150"
            onClick={() => setMenu(true)}
          >
            <Link to="/product">Product</Link>
          </li>
          <li
            className="leading-20 py-2 text-xl  text-center hover:text-secondary-dark hover:translate-x-1 ease-linear duration-150"
            onClick={() => setMenu(true)}
          >
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li
            className="leading-20 py-2 mt-3 text-md text-center "
            onClick={() => setMenu(true)}
          >
            <Link
              to="/get-started"
              className="border-2 border-secondary-dark slide slide__mob font-medium px-10 py-3 "
            >
              APPLY NOW
            </Link>
          </li>
        </ul>

        <ul className="absolute right-0 left-0 bottom-10 flex items-center justify-around gap-2 border-t-2 pt-3">
          <li>
            <ImFacebook size={30} />
          </li>
          <li>
            <a href="https://twitter.com/GetWaveafrica_" target="_blank">
              <ImTwitter size={30} />
            </a>
          </li>
          <li>
            <ImLinkedin2 size={30} />
          </li>
          <li>
            <a
              href="https://instagram.com/getwaveafrica_?igshid=ZmRlMzRkMDU="
              target="_blank"
            >
              <GrInstagram size={30} />
            </a>
          </li>
          <li>
            <MdMail size={30} />
          </li>
          <li>
            <MdLocalPhone size={30} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

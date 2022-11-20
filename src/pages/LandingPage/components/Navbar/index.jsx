import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarData } from "../../../../utils/constants/NavbarData";
import "../../../../utils/constants/NavbarData.style.css";
import WaveLogo from "../../../../assets/images/Wave-Logo.png";
import "./Navbar.style.css";
import { MdClose, MdMail, MdMenuMdMenu, MdLocalPhone } from "react-icons/md";
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
          className={`md:hidden cursor-pointer ${
            menu ? "mobile__open" : "mobile__close"
          }`}
        >
          <MdMenu size={40} />
        </div>
      </nav>

      <nav
        className={`border px-[5vw] fixed z-20 bg-[#fff] left-0 right-0 top-0 bottom-0 delay-200 transition ease-in duration-500 ${
          menu ? "" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-[80px] py-[5px]">
          <div className="logo">
            <img src={WaveLogo} alt="" className="" />
          </div>
          <MdClose
            size={40}
            onClick={handleMobileMenuToggle}
            className="text-secondary-dark font-bold"
          />
        </div>
        <ul>
          <li className="leading-20 py-2 text-xl">
            <a href="/" onClick={() => setMenu(true)}>
              Home
            </a>
          </li>
          <li className="leading-20 py-2 text-xl">
            <a href="/about-us" onClick={() => setMenu(true)}>
              About Us
            </a>
          </li>
          <li className="leading-20 py-2 text-xl">
            <a href="/project" onClick={() => setMenu(true)}>
              Project
            </a>
          </li>
          <li className="leading-20 py-2 text-xl">
            <a href="/contact-us" onClick={() => setMenu(true)}>
              Contact Us
            </a>
          </li>
          <li className="leading-20 py-2 text-xl">
            <a
              href="/get-started"
              onClick={() => setMenu(true)}
              className="px-5"
            >
              APPLY NOW
            </a>
          </li>
        </ul>

        <ul className="absolute right-0 left-0 bottom-10 flex items-center justify-around gap-2">
          <li>
            <ImFacebook size={30} />
          </li>
          <li>
            <ImTwitter size={30} />
          </li>
          <li>
            <ImLinkedin2 size={30} />
          </li>
          <li>
            <GrInstagram size={30} />
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

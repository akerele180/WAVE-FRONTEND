import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarData } from "../../../../utils/constants/NavbarData";
import "../../../../utils/constants/NavbarData.style.css";
import WaveLogo from "../../../../assets/images/Wave-Logo.png";
import "./Navbar.style.css";
const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const handleMobileMenuToggle = () => setMenu((menu) => !menu);
  return (
    <header className="flex justify-between items-center h-[80px]">
      <div className="logo">
        <img src={WaveLogo} alt="" className="" />
      </div>
      <nav className="flex items-center">
        <ul className="md:flex justify-around flex-1 hidden">
          {NavbarData.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`${item.path}`}
                className="px-3 py-4 hover:text-primary"
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
          <span className="bg-primary w-[30px] h-[4px] block my-[4px] rounded-sm first"></span>
          <span className="bg-primary w-[30px] h-[4px] block my-[4px] rounded-sm second"></span>
          <span className="bg-primary w-[30px] h-[4px] block my-[4px] rounded-sm third"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

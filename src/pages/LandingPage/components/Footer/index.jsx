import {
  GrTwitter,
  GrFacebook,
  GrLinkedin,
  GrInstagram,
  GrPhone,
} from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <nav className="col-span-2 max-md:hidden">
        <ul className="flex items-center space-x-10 justify-center">
          <li className="one group cursor-pointer flex items-center gap-1">
            <GrTwitter className="group-hover:scale-150 ease-linear duration-300" />
            <a
              href="https://twitter.com/GetWaveafrica_"
              target="_blank"
              className=""
            >
              Twitter
            </a>
          </li>
          <li className="two group cursor-pointer flex items-center gap-1">
            {" "}
            <GrFacebook className="group-hover:scale-150 ease-linear duration-300" />
            <a
              href="https://www.facebook.com/profile.php?id=100087218077643"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li className="three group cursor-pointer flex items-center gap-1">
            <GrLinkedin className="group-hover:scale-150 ease-linear duration-300" />
            LinkedIn
          </li>
          <li className="four group cursor-pointer flex items-center gap-1">
            <GrInstagram className="group-hover:scale-150 ease-linear duration-300" />
            <a href="https://instagram.com/getwaveafrica_" target="_blank">
              Instagram
            </a>
          </li>
          <li className="five group cursor-pointer flex items-center gap-1">
            <GrPhone className="group-hover:scale-150 ease-linear duration-300" />
            Phone Number
          </li>
          <li className="six group cursor-pointer flex items-center gap-1">
            <MdEmail className="group-hover:scale-150 ease-linear duration-300" />
            Email Info
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;

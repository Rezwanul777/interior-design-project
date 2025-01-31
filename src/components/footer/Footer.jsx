import { FaPhone } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { LuMessageSquare } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* company information */}
          <div className="space-y-4">
            <div className="flex  space-x-2 items-center">
              <img src={logo} alt="" className="w-10" />
              <span className="text-2xl font-bold">Interior</span>
            </div>
            <p>Bogura SultangonjPara, Bangladesh</p>
            <p>@ 2025 All rights reserved</p>
          </div>

          {/* footer link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+91 123456789</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:contact.thecodingjourney@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom section */}
        <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-5">
          &copy; 2025 REZ. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

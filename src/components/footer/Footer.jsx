import { Link } from "react-router-dom";
import logo from '../../assets/foodLogo.png'
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import {
    AiFillTwitterCircle,
    AiOutlineGooglePlus,
    AiFillInstagram,
} from "react-icons/ai";
import { MdLocationOn, MdCall, MdOutlineFax, MdEmail } from "react-icons/md";

const Footer = () => {
    return (
      <>
        <div className=" footer-image mt-5">
          <footer className="footer justify-center md:px-5 md:justify-normal lg:px-0 py-20  text-white font-robotFont max-w-7xl md:mx-auto ">
            <aside>
              <div className=" flex  md:gap-2 items-center">
                <img
                  src={logo}
                  alt="not found"
                  className=" w-20 md:w-24 h-auto"
                />
                <Link
                  to="/"
                  className=" uppercase text-lg md:text-2xl font-semibold tracking-wider font-robotFont"
                >
                  FOODDONATION
                </Link>
              </div>
              <p className=" text-sm">
                Food donation is the act of providing food to individuals <br />{" "}
                or organizations in need.
              </p>
            </aside>
            <nav>
              <header className=" footer-title text-xl mb-4 text-white  opacity-100 ">
                Contact
                <div className=" bg-[#A4A0CC] h-1 w-10 mt-2"></div>
              </header>
              <div className=" space-y-3">
                <div className=" flex gap-2">
                  <MdLocationOn className=" text-xl" />
                  Anthony Benoit 490 E Main Street Norwich CT 06360
                </div>
                <div className=" flex gap-2">
                  <MdCall className=" text-xl" />
                  Phone: +1(2)345 6789
                </div>
                <div className=" flex gap-2">
                  <MdOutlineFax className=" text-xl" />
                  Fax: +1 (2)345 6789
                </div>
                <div className=" flex gap-2">
                  <MdEmail className=" text-xl" />
                  contact@yourdomain.com
                </div>
              </div>
            </nav>
            <nav>
              <header className="footer-title text-xl mb-4 text-white  opacity-100">
                Follow us
                <div className=" bg-[#A4A0CC] h-1 w-10 mt-2"></div>
              </header>
              <div className="grid grid-flow-col gap-4">
                <a href="#">
                  <CiFacebook className=" text-4xl hover:text-[#A4A0CC] rounded-full" />
                </a>
                <a href="#">
                  <AiFillTwitterCircle className=" text-4xl hover:text-[#A4A0CC] rounded-full" />
                </a>
                <a>
                  <AiOutlineGooglePlus className=" text-4xl hover:text-[#A4A0CC] rounded-full" />
                </a>
                <a>
                  <AiFillInstagram className=" text-4xl hover:text-[#A4A0CC] rounded-full" />
                </a>
              </div>
            </nav>
            <nav>
              <header className="footer-title text-xl mb-4 text-white  opacity-100">
                Legal
                <div className=" bg-[#A4A0CC] h-1 w-10 mt-2"></div>
              </header>
              <Link className="link link-hover hover:text-[#A4A0CC]">
                Terms of use
              </Link>
              <Link className="link link-hover hover:text-[#A4A0CC]">
                Privacy policy
              </Link>
              <Link className="link link-hover hover:text-[#A4A0CC]">
                Cookie policy
              </Link>
            </nav>
          </footer>
        </div>
        {/* copyright section here  */}
        <div className=" bg-[#111822] text-white">
          <div className="flex flex-col-reverse text-center gap-4 lg:flex-row lg:text-start lg:justify-between  max-w-7xl mx-auto py-9">
            <div>
              <span>
                Copyright © 2020. All rights reserved by, FoodDonation
              </span>
            </div>
            <div className=" space-x-7">
              <Link to={"/"} className="link link-hover hover:text-[#A4A0CC]">
                Home
              </Link>
              <Link
                to={"/availableFoods"}
                className="link link-hover hover:text-[#A4A0CC]"
              >
                Available Foods
              </Link>
              <Link
                to={"/addFood"}
                className="link link-hover hover:text-[#A4A0CC]"
              >
                Add Food
              </Link>
              <Link
                to={"/manageMyFoods"}
                className="link link-hover hover:text-[#A4A0CC]"
              >
                Manage My Foods
              </Link>
              <Link
                to={"/myFoodRequest"}
                className="link link-hover hover:text-[#A4A0CC]"
              >
                My Food Request
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default Footer;
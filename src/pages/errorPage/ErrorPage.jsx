import { Link} from "react-router-dom";
import './ErrorPage.css'
import errorLogo from '../../assets/404.png'

const ErrorPage = () => {

    return (
      <div className="background_error h-screen">
        <div className=" font-robotFont max-w-7xl md:mx-auto px-6 lg:px-0 pt-20 ">
          <div className=" grid justify-center items-center space-y-4">
            <div className=" text-center ">
              <img src={errorLogo} className=" inline-block" alt="not found" />
            </div>

            <h3 className=" text-6xl font-extrabold text-center">
              Oop, that link is broken.
            </h3>
            <div className=" text-center pt-4">
              <p className=" text-lg">
                Page doesn’t exist or some other error occured. go back to
                <Link
                  className="text-[#9e2422] hover:text-[#538b0b]"
                  to="/"
                >
                  {" "}
                  Home page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;
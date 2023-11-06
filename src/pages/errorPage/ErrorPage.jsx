import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
      <div>
        <div className=" font-robotFont max-w-7xl md:mx-auto px-6 lg:px-0 my-14">
          <h2 className="text-[#82b440] text-2xl font-extrabold">
            The page you are looking for was not found.
          </h2>

          <div className=" grid justify-center mt-20 space-y-4">
            <div className=" text-center ">
              <img
                src="https://i.ibb.co/QpvWxgb/404-image.png"
                className=" inline-block"
                alt="not found"
              />
            </div>

            <h2 className=" text-[#82b440] text-center text-5xl font-extrabold">
              {error.status}
            </h2>

            <h3 className=" text-lg text-center">
              Oops, it looks like you are lost ...
            </h3>
            <div className=" text-center pt-4">
              <Link
                to="/"
                className="bg-[#82b440] px-4 py-3 rounded-lg font-medium hover:bg-[#538b0b] text-white"
              >
                BACKTOHOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;
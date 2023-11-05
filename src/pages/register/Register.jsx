import { Link } from "react-router-dom";
import './Register.css'
import { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Register = () => {
    const [passShowHide, setPassShowHide] = useState(false);
    return (
      <div className=" lRbg-image">
        <div className=" pt-14 pb-24 px-8 md:px-0">
          <div className="flex-col py-5 border border-[#D0D0D0] rounded-md max-w-lg mx-auto ">
            <div className="text-center">
              <h1 className="text-5xl font-bold pt-6 pb-2 text-[#fff]">
                Register
              </h1>
            </div>
            {/* <div className=" px-8 py-5">
              {error ? <p className=" text-red-500">{error}</p> : ""}
            </div>
                     */}
            <div className="card w-full">
              {/* onSubmit={handleRegister} */}
              <form className=" px-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg font-poppins font-medium ">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg font-poppins font-medium ">
                      Image-url
                    </span>
                  </label>
                  <input
                    type="text"
                    name="image_url"
                    placeholder="image url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg font-poppins font-medium ">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label className="label ">
                    <span className="label-text text-white text-lg font-poppins font-medium ">
                      Password
                    </span>
                  </label>
                  <div className="form-control relative">
                    <input
                      type={passShowHide ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered mb-2"
                      required
                    />
                    <div className=" absolute right-3 translate-y-4">
                      {passShowHide ? (
                        <BiSolidHide
                          onClick={() => setPassShowHide(false)}
                          className=" text-xl"
                        />
                      ) : (
                        <BiSolidShow
                          onClick={() => setPassShowHide(true)}
                          className="text-xl"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-white border-0 bg-[#d59a11] hover:bg-[#a57810] normal-case text-xl">
                    Register
                  </button>
                </div>
              </form>
              <div className=" text-center pt-3">
                <h4 className=" text-white">
                  Already have an account?{" "}
                  <Link to="/login" className=" text-[#d59a11]">
                    Login
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;

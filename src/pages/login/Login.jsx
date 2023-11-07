import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import './Login.css'
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const [passShowHide, setPassShowHide] = useState(false);
  const {accountLogin, loginGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //  error message clean
    setError("");

    if (password.length < 6) {
      setError("Password must be 6 characters!");
      return;
    }

    // create account
    accountLogin(email, password)
      .then((data) => {
        const lastLoginAt = data.user?.metadata?.lastSignInTime;
        const userData = {
          email,
          password,
          lastLoginAt,
        };
        axios.patch("http://localhost:5000/user", userData).then((res) => {
          if (res.data.modifiedCount == 1) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: "success",
              title: "Login successfully",
            });
            form.reset();
            navigate("/");
          }
        });
      })
      .catch((error) => setError(`Please signUp then try. ${error.message}`));
  };

  // login with google
  const handleGoogle = () => {
    loginGoogle()
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen lRbg-image">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm border border-[#D0D0D0]">
          <h1 className="text-[#fff] text-4xl text-center font-semibold mt-8">
            Login
          </h1>
          <div className=" px-8 py-5">
            {error ? <p className=" text-red-500">{error}</p> : ""}
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#fff]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#fff] ">Password</span>
              </label>
              <div className="form-control relative">
                <input
                  type={passShowHide ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
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
              <label className="my-2">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-sm text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-[#112A46] text-white normal-case text-lg hover:bg-[#0b1f37] border-0"
                value="Login"
              />
            </div>
          </form>
          <div className=" text-center mb-6">
            <p className=" text-base font-medium text-[#fff] ">
              Create a new account?{" "}
              <Link to="/register" className=" text-[#A4A0CC]">
                Sign Up
              </Link>
            </p>
          </div>
          {/* google button */}
          <div className="text-center mt-4 mb-4">
            <button
              onClick={handleGoogle}
              className="btn bg-inherit hover:bg-[#112A46]  outline-1  normal-case rounded-full w-64 border-gray-400 text-white "
            >
              <FcGoogle className=" text-3xl top-2 left-4 md:left-32 " />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
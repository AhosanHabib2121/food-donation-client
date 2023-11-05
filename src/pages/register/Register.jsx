import { Link, useNavigate } from "react-router-dom";
import './Register.css'
import { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
    const [passShowHide, setPassShowHide] = useState(false);
    const { createAccount, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;

        // error message clean
        setError("");

        if (password.length < 6) {
            setError("Password must be 6 characters!");
            return;
        }
        
        createAccount(email, password)
            .then((data) => {
                // update profile
                profileUpdate(name, photo_url)
                    .then(() => {
                        const createdAt = data.user?.metadata.creationTime;
                        const userData = {
                          name,
                          photo_url,
                          email,
                          password,
                          createdAt,
                        };
                        axios.post("http://localhost:5000/user", userData)
                        .then(res => {
                            if (res.data.insertedId) {
                                const Toast = Swal.mixin({
                                  toast: true,
                                  position: "top-end",
                                  showConfirmButton: false,
                                  timer: 3000,
                                  timerProgressBar: true,
                                  didOpen: (toast) => {
                                    toast.addEventListener(
                                      "mouseenter",
                                      Swal.stopTimer
                                    );
                                    toast.addEventListener(
                                      "mouseleave",
                                      Swal.resumeTimer
                                    );
                                  },
                                });
                                Toast.fire({
                                  icon: "success",
                                  title: "Account create successfully",
                                });
                                form.reset();
                                navigate('/');
                            }
                        })
                    })
            })
          .catch((error) => console.log(error.message));

    };

    return (
      <div className=" lRbg-image">
        <div className=" pt-14 pb-24 px-8 md:px-0">
          <div className="flex-col py-5 border border-[#D0D0D0] rounded-md max-w-lg mx-auto ">
            <div className="text-center">
              <h1 className="text-5xl font-bold pt-6 pb-2 text-[#fff]">
                Register
              </h1>
            </div>
            <div className=" px-8 py-5">
              {error ? <p className=" text-red-500">{error}</p> : ""}
            </div>
                    
            <div className="card w-full">
              <form onSubmit={handleRegister} className=" px-8">
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
                      Photo-url
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photo_url"
                    placeholder="photo url"
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

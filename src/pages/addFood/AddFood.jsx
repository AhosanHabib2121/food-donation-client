import { useContext } from "react";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../authProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.food_name.value;
        const food_image = form.food_image.value;
        const pickup_location = form.pickup_location.value;
        const food_quantity = form.food_quantity.value;
        const expired_date = form.expired_date.value;
        const additional_notes = form.additional_notes.value;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const userImage = user?.photoURL;

        const addFoodInfo = {
          food_name,
          food_image,
          pickup_location,
          food_quantity,
          expired_date,
          additional_notes,
          userName,
          userEmail,
          userImage,
        };
        axios.post("http://localhost:5000/foods", addFoodInfo)
            .then(res => {
                if(res.data.acknowledged){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Food added successfully!",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    form.reset();
                }
                
            })
            .catch(error => console.log(error))


    }
    
  return (
    <>
      <div className=" max-w-2xl md:mx-auto my-10 mx-5  ">
        <div className=" min-h-screen bg-[#030610e3] rounded-xl">
          <h2 className=" text-center text-4xl font-bold text-[#d59a11] pt-5">
            Food Add
          </h2>
          <div className="hero-content">
            <div className="card w-full max-w-3xl">
              <form onSubmit={handleSubmit} className="card-body">
                <div className=" md:flex gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg font-semibold text-[#d59a11]">
                        Food Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="food_name"
                      placeholder="food name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className=" form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg font-semibold text-[#d59a11]">
                        Food Image
                      </span>
                    </label>
                    <input
                      type="text"
                      name="food_image"
                      placeholder="food image url"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className=" form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold text-[#d59a11]">
                      Pickup Location
                    </span>
                  </label>
                  <textarea
                    name="pickup_location"
                    className="textarea textarea-bordered"
                    placeholder="pickup Location"
                    required
                  ></textarea>
                </div>
                <div className="md:flex gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg font-semibold text-[#d59a11]">
                        Food Quantity
                      </span>
                    </label>
                    <input
                      type="number"
                      name="food_quantity"
                      placeholder="food quantity"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className=" form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg font-semibold text-[#d59a11]">
                        Expired Date/Time
                      </span>
                    </label>
                    <input
                      type="date"
                      name="expired_date"
                      placeholder="expired date time"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className=" form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold text-[#d59a11]">
                      Additional Notes
                    </span>
                  </label>
                  <textarea
                    name="additional_notes"
                    className="textarea textarea-bordered"
                    placeholder="additional Notes"
                    required
                  ></textarea>
                </div>

                <div className=" mt-8 text-right">
                  <button className="px-4 py-2 rounded-lg font-semibold hover:bg-[#d59a11] bg-[#d59a11] text-white normal-case">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer section here */}
      <Footer />
    </>
  );
};

export default AddFood;

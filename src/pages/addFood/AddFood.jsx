import Footer from "../../components/footer/Footer";

const AddFood = () => {

    // ● Donator Image , Name, & email (From logged in user)
    // ● Food Status (By default keep it ”available”)
    const handleSubmit = e => {
        e.preventDefault();
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

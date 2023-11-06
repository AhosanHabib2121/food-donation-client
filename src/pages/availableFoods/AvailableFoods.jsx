import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AvailableFoods = () => {

   const availableFoods = async () => {
     const res = await axios.get("http://localhost:5000/foods");
     return res;
   };

   const {data: availableFood,isError,isLoading, refetch,} = useQuery({
     queryKey: ["availableFoods"],
     queryFn: availableFoods,
   });
  return (
    <>
      <div>
        <div className="max-w-7xl md:mx-auto mx-5 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableFood?.data?.foodAll.map((food) => (
              <>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={food?.food_image}
                      className="w-full h-60 object-cover"
                      alt="not found"
                    />
                  </figure>
                  <div className="card-body">
                    <div className=" flex justify-between items-center">
                      <h2 className="card-title text-xl text-[#d59a11]">
                        {food?.food_name}
                      </h2>
                      <div>
                        <h3>
                          <span className="text-[#d59a11]">
                            Expired Date :{" "}
                          </span>
                          {food?.expired_date}
                        </h3>
                      </div>
                    </div>
                    <h3 className="text-lg">
                      <span className="text-[#d59a11]">Food Quantity : </span>
                      {food?.food_quantity}
                    </h3>
                    <h3 className="text-lg">
                      <span className="text-[#d59a11]">Pickup Location : </span>
                      {food?.pickup_location}
                    </h3>
                    <h3 className="text-lg">
                      <span className="text-[#d59a11]">
                        Additional Notes :{" "}
                      </span>
                      {food?.additional_notes}
                    </h3>
                    <div className="flex gap-2 items-center mt-3">
                      <img
                        src={food?.userImage}
                        className=" w-16 h-16 rounded-full"
                        alt="not found"
                      />
                      <h3 className=" text-lg ">{food?.userName}</h3>
                    </div>

                    <div className="card-actions justify-center my-4">
                      <button className="btn bg-[#d59a11] text-lg text-white normal-case hover:bg-[#a3770f] ">
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* footer section here */}
      <Footer />
    </>
  );
};

export default AvailableFoods;

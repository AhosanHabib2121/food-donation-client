import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import './AvailableFoods.css'
import { useEffect, useState } from "react";

const AvailableFoods = () => {
  const [inputValue, setInputValue] = useState("");
  const getInputData = inputValue.toUpperCase();
  const [foodData, setFoodData] = useState([]);


  const availableFoods = async () => {
    const res = await axios.get("http://localhost:5000/foods");
    return res;
  };

  const {
    data: availableFood,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: availableFoods,
  });

  // console.log(availableFood?.data?.foodAll);
  const handleSearch = (e) => {
    e.preventDefault();
    const getInputValue = e.target.foodName.value;
      setInputValue(getInputValue);
  };

 
  // input value filtering here
  
  const foodNameBase = availableFood?.data?.foodAll.filter(
    (food) => food.food_name.toUpperCase() == getInputData
  );

  useEffect(() => {
    if (foodNameBase == "") {
      setFoodData(availableFood?.data?.foodAll);
    } else {
      setFoodData(foodNameBase);
    }
  }, [availableFood?.data?.foodAll, foodNameBase, getInputData]);

  if (isLoading) {
    return <p className="text-red-500 text-center">loading.......</p>
  }
  refetch();

  return (
      <>
        <div>
          <div className="text-sm breadcrumbs breadcrumbPhoto  h-[300px]">
            <div className="grid justify-center items-center h-[250px]">
              <div className="space-y-8">
                <h2 className="text-[#d59a11] font-bold text-4xl text-center md:text-left">
                  Food name search from available food
                </h2>
                <div className="form-control">
                  <form onSubmit={handleSearch}>
                    <div className="input-group justify-center">
                      <input
                        name="foodName"
                        type="text"
                        placeholder="Search here…"
                        className="input input-bordered focus:outline-none w-3/5"
                      />
                      <button
                        type="submit"
                        className="btn text-white text-base font-semibold hover:bg-[#9b710f] normal-case bg-[#d59a11]"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl md:mx-auto mx-5 mt-10">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {foodData?.map((food) => (
                <>
                  <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={food?.food_image}
                        className="w-full h-60 object-cover"
                        alt="not found"
                      />
                    </figure>
                    <div className="card-body ">
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
                        <span className="text-[#d59a11]">
                          Pickup Location :{" "}
                        </span>
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

                      <div className="card-actions h-full items-end justify-center my-4">
                        <button className="btn bg-[#d59a11]  text-lg text-white normal-case hover:bg-[#a3770f] ">
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

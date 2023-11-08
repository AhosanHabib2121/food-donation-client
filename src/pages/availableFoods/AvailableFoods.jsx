import {Link} from "react-router-dom";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import "./AvailableFoods.css";
import {useEffect, useState} from "react";
import ExpireDate from "./ExpireDate";
import loading from '../../assets/Animation -loading.gif'

const AvailableFoods = () => {
  const [inputValue, setInputValue] = useState("");
  const getInputData = inputValue.toUpperCase();
  const [foodData, setFoodData] = useState([]);

  const availableFoods = async () => {
    const res = await axios.get("https://food-donation-server-ass11.vercel.app/foods");
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

  refetch();
  if (isLoading) {
    return <>
      <div className=" grid justify-center">
        <img src={loading} alt="not found" />
      </div>
    </>;

  }

  return (
    <>
      <div>
        <div className="text-sm breadcrumbs breadcrumbPhoto  h-[300px]">
          <div className="grid justify-center items-center h-[250px]">
            <div className="space-y-8">
              <h2 className="text-[#fff] font-bold text-4xl text-center md:text-left">
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
                      className="btn text-white text-base font-semibold hover:bg-[#0b1f37] normal-case bg-[#112A46]"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl lg:mx-auto mx-5 mt-10">
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
                      <h2 className="card-title text-xl text-[#112A46]">
                        {food?.food_name}
                      </h2>
                      <div>
                        <h3>
                          <span className="text-[#112A46]">
                            Expired Date :{" "}
                          </span>
                          {food?.expired_date}
                        </h3>
                      </div>
                    </div>
                    <h3 className="text-lg">
                      <span className="text-[#112A46]">Food Quantity : </span>
                      {food?.food_quantity}
                    </h3>
                    <h3 className="text-lg">
                      <span className="text-[#112A46]">Pickup Location : </span>
                      {food?.pickup_location}
                    </h3>
                    <h3 className="text-lg">
                      <span className="text-[#112A46]">
                        Additional Notes :{" "}
                      </span>
                      {food?.additional_notes}
                    </h3>
                    <div className="flex gap-2 items-center mt-3">
                      <img
                        src={food?.donatorImage}
                        className=" w-16 h-16 rounded-full"
                        alt="not found"
                      />
                      <h3 className=" text-lg ">{food?.donatorName}</h3>
                    </div>

                    <div className="card-actions h-full items-end justify-center my-4">
                      <Link
                        to={`food/${food?._id}`}
                        className="btn bg-[#112A46]  text-lg text-white normal-case hover:bg-[#0b1f37] "
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Expire date food */}
        <ExpireDate />
      </div>

      {/* footer section here */}
      <Footer />
    </>
  );
};

export default AvailableFoods;

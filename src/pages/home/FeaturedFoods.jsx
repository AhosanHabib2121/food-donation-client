import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FeaturedFoods = () => {

    const featuredFood = async () => {
        const res = await axios.get("http://localhost:5000/foods");
        return res;
           
    }

    const {data:featureFoods, isLoading, refetch} = useQuery({
        queryKey: ["featuredFood"],
        queryFn: featuredFood
    });

    if (isLoading) {
      return <p className=' text-red-600 text-center'>loading....</p>
  }
  refetch()
      return (
        <div className="max-w-7xl md:mx-auto mx-5 mt-10">
          {/* head title here */}
          <div className=" mb-12">
            <h2 className=" text-[#d59a11] text-4xl font-bold text-center">
              Featured Food
            </h2>
            <p className=" max-w-md mx-auto text-center text-sm mt-2 text-[#4b4a4a]">
              food magazine, or any food-related platform that highlights
              specific dishes or ingredients.
            </p>
          </div>
          {/* card area */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureFoods?.data?.featureFood.map((food) => (
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

                    <div className="card-actions  h-full items-end justify-center my-4">
                      <button className="btn bg-[#d59a11] text-lg text-white normal-case hover:bg-[#a3770f] ">
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className=" my-16 text-center">
            <Link
              to="/availableFoods"
              className="bg-[#d59a11] text-lg text-white py-3 px-3 hover:bg-[#a3770f] rounded-md"
            >
              Show All
            </Link>
          </div>
        </div>
      );
};

export default FeaturedFoods;
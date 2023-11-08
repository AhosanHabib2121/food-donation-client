import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import loading from '../../assets/Animation -loading.gif'

const FeaturedFoods = () => {

    const featuredFood = async () => {
      const res = await axios.get("https://food-donation-server-ass11.vercel.app/foods");
      return res;
    };

    const {
      data: featureFoods,
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["featuredFood"],
      queryFn: featuredFood,
    });
    refetch();
    if (isLoading) {
      return <>
        <div className=" grid justify-center">
          <img src={loading} alt="not found" />
          </div>
        </>;
      }

    return (
      <div className="max-w-7xl lg:mx-auto mx-5 mt-10">
        {/* head title here */}
        <div className=" mb-12">
          <h2 className=" text-[#112A46] text-4xl font-bold text-center">
            Featured Food
          </h2>
          <p className=" max-w-md mx-auto text-center text-sm mt-2 text-[#4b4a4a]">
            food magazine, or any food-related platform that highlights specific
            dishes or ingredients.
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
                    <h2 className="card-title text-xl text-[#112A46]">
                      {food?.food_name}
                    </h2>
                    <div>
                      <h3>
                        <span className="text-[#112A46]">Expired Date :</span>
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
                    <span className="text-[#112A46]">Additional Notes : </span>
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

                  <div className="card-actions  h-full items-end justify-center my-4">
                    <Link
                      to={`food/${food?._id}`}
                      className="btn bg-[#112A46] text-lg text-white normal-case hover:bg-[#0b1f37] "
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" my-16 text-center">
          <Link
            to="/availableFoods"
            className="bg-[#112A46] text-lg text-white py-3 px-3 hover:bg-[#0b1f37] rounded-md"
          >
            Show All
          </Link>
        </div>
      </div>
    );
};

export default FeaturedFoods;
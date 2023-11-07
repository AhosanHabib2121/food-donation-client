import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Link} from "react-router-dom";

const ExpireDate = () => {
  const ExpireDateFood = async () => {
    const res = await axios.get("http://localhost:5000/foods");
    return res;
  };

  const {
    data: expireDateFoods,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ExpireDateFood"],
    queryFn: ExpireDateFood,
  });

  if (isLoading) {
    return <p className=" text-red-600 text-center">loading....</p>;
  }
  refetch();
  return (
    <div className="max-w-7xl lg:mx-auto mx-5 mt-14">
      {/* head title here */}
      <div className=" mb-12">
        <h2 className=" text-[#112A46] text-4xl font-bold text-center">
          Soon Expired Date
        </h2>
        <p className=" max-w-md mx-auto text-center text-sm mt-2 text-[#4b4a4a]">
          Use up the food soon as the food expires before and here many food
          stored.
        </p>
      </div>
      {/* card area */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expireDateFoods?.data?.expiredDate.map((food) => (
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
                      <span className="text-[#112A46]">Expired Date : </span>
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
    </div>
  );
};

export default ExpireDate;

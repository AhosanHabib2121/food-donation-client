import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import moment from 'moment';
import { useState } from "react";
import './FoodDetails.css'

const FoodDetails = () => {
  const {foodId} = useParams();
  const [success, setSuccess] = useState("");
  const FoodData = async () => {
    const res = await axios.get("http://localhost:5000/foods");
    return res;
  };

  const {data: foodDatas, isLoading} = useQuery({
    queryKey: ["FoodData"],
    queryFn: FoodData,
  });

  const singleFood = foodDatas?.data?.foodAll.find(
    (food) => food?._id == foodId
  );

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const donation_money = form.donation_money.value;
    const additional_notes = form.additional_notes.value;
    const food_name = singleFood?.food_name;
    const food_image = singleFood?.food_image;
    const food_id = singleFood?._id;
    const donatorEmail = singleFood?._id;
    const donatorName = singleFood?.donatorName;
    const userEmail = singleFood?.donatorEmail;
    const requestDate = moment().format("MM.D.YYYY, h:mm:ss a");
    const pickup_location = singleFood?.pickup_location;
    const expired_date = singleFood?.expired_date;
    const food_status = singleFood?.food_status;

    const requestFood = {
      donation_money,
      additional_notes,
      food_name,
      food_image,
      food_id,
      donatorEmail,
      donatorName,
      userEmail,
      requestDate,
      pickup_location,
      expired_date,
      food_status,
    };
    axios
      .post("http://localhost:5000/foodRequest", requestFood)
      .then((res) => {
        if (res.data.acknowledged) {
          setSuccess("Food request successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <p className=" text-red-600 text-center">loading....</p>;
  }

  return (
    <>
      <div className="text-sm breadcrumbs breadcrumbPhoto  h-[300px]">
        <div className="grid justify-center items-center h-[250px]">
          <div className="space-y-8">
            <h2 className="text-[#fff] font-bold text-4xl text-center md:text-left">
              Specific food donation request here
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-7xl md:mx-auto mx-5 my-20 ">
        <div className="flex md:gap-16 lg:flex-row  flex-col gap-20">
          {/* image part */}
          <div className="flex-1 grid justify-end">
            <img
              src={singleFood?.food_image}
              className="w-[400px] h-[400px] md:max-w-lg md:max-h-lg rounded-full "
              alt="not found"
            />
          </div>
          {/* content part */}
          <div className="flex-1">
            {/* donor information */}
            <div>
              <h2 className=" text-xl mb-2 font-extrabold text-[#112A46] ">
                Donor Information
                <div className=" bg-[#112A46] h-1 w-20 mt-2"></div>
              </h2>
              <h3 className=" text-lg ">
                <span className="font-bold">Donar Name : </span>
                {singleFood?.donatorName}
              </h3>
              <h3 className=" text-lg ">
                <span className="font-bold">Food Pickup Location : </span>
                {singleFood?.pickup_location}
              </h3>
            </div>
            {/* food Information */}
            <div className=" mt-4">
              <h2 className=" text-xl mb-2 font-extrabold text-[#112A46] ">
                Food Information
                <div className=" bg-[#112A46] h-1 w-20 mt-2"></div>
              </h2>
              <h2 className="font-bold text-xl text-[#112A46]">
                <span className="font-bold">Food Name : </span>
                {singleFood?.food_name}
              </h2>
              <h2 className="text-lg">
                <span className="font-bold text-xl text-[#112A46]">
                  Food Quantity :{" "}
                </span>
                {singleFood?.food_quantity}
              </h2>
              <h3>
                <span className="font-bold text-xl text-[#112A46]">
                  Expired Date :{" "}
                </span>
                {singleFood?.expired_date}
              </h3>

              <div className="card-actions  h-full items-end justify-start my-4">
                <button
                  className="btn bg-[#112A46] text-lg text-white normal-case hover:bg-[#0b1f37] "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* request modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className=" mt-4">
            <div className=" py-3">
              {success ? <p className=" text-green-600">{success}</p> : ""}
            </div>
            <form onSubmit={handleRequest}>
              <div className="md:flex gap-4">
                <div className=" form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold text-[#112A46]">
                      Donation Money
                    </span>
                  </label>
                  <input
                    type="number"
                    name="donation_money"
                    placeholder="donation money"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className=" form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold text-[#112A46]">
                      Additional Notes
                    </span>
                  </label>
                  <input
                    type="text"
                    name="additional_notes"
                    placeholder="additional Notes"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className=" mt-8 text-right">
                <button className="px-4 py-2 rounded-lg font-semibold hover:bg-[#0b1f37] bg-[#112A46] text-white normal-case">
                  Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      {/* footer section here */}
      <Footer />
    </>
  );
};

export default FoodDetails;
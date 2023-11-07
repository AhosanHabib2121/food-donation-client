import axios from "axios";
import Footer from "../../components/footer/Footer";
import { useQuery } from "@tanstack/react-query";

const MyFoodRequest = () => {
    const myFoodRequest = async () => {
      const res = await axios.get("http://localhost:5000/foods");
      return res;
    };

    const {data: myFoodRequests, isLoading} = useQuery({
      queryKey: ["myFoodRequest"],
      queryFn: myFoodRequest,
    });

if (isLoading) {
  return <p className=" text-red-600 text-center">loading....</p>;
}

  return (
    <>
      <div className="max-w-7xl md:mx-auto lg:mx-20 mx-5 my-14 ">
        <div className="overflow-x-auto bg-[#112A46] text-white">
          <table className="table border-collapse border-spacing-2 border border-slate-400">
            {/* head */}
            <thead className=" text-white text-lg ">
              <tr className="border-[#9f9f9f] border-b ">
                <th>Donar Name</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Request Date</th>
                <th>Donation Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>
                  <button className="btn bg-[#A4A0CC] border-none text-lg text-white normal-case hover:bg-[#0b1f37]">
                    Cancel Request
                  </button>
                </td>
              </tr>

              {/* row 2 */}
              <tr>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>
                  <button className="btn bg-[#A4A0CC] border-none text-lg text-white normal-case hover:bg-[#0b1f37]">
                    Cancel Request
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>

      {/* footer section here */}
      <Footer />
    </>
  );
};

export default MyFoodRequest;

import axios from "axios";
import Footer from "../../components/footer/Footer";
import { useQuery } from "@tanstack/react-query";
import { useContext} from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import './MyFoodRequest.css'

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext)

    const myFoodRequest = async() => {
      const res = await axios.get(
        `http://localhost:5000/foodRequest?email=${user?.email}`
      );
      return res;
    };
    const {data, isLoading} = useQuery({
      queryKey: ["myFoodRequest"],
      queryFn: myFoodRequest,
    });
  
  console.log(data);
  
    if (isLoading) {
      return <p className=" text-red-600 text-center">loading....</p>;
    }
     

  return (
    <>
      <div className="text-sm breadcrumbs breadcrumbPhoto  h-[300px]">
        <div className="grid justify-center items-center h-[250px]">
          <div className="space-y-8">
            <h2 className="text-[#fff] font-bold text-4xl text-center md:text-left px-5 md:px-0">
              My specific food requests here
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-7xl lg:mx-auto md:mx-20 mx-5 my-14 ">
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
              {data.data?.map((myFood) => (
                <>
                  <tr>
                    <td>{myFood?.donatorName}</td>
                    <td>{myFood?.pickup_location}</td>
                    <td>{myFood?.expired_date}</td>
                    <td>{myFood?.requestDate}</td>
                    <td>{myFood?.donation_money}</td>
                    <td>{myFood?.food_status}</td>
                    <td>
                      {myFood?.food_status == "available" ? (
                        <button className="btn bg-[#A4A0CC] border-none text-lg text-white normal-case hover:bg-[#0b1f37]">
                          Cancel Request
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                </>
              ))}
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

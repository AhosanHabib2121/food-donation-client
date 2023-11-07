import Footer from "../../components/footer/Footer";
import {useReactTable} from "@tanstack/react-table";


const ManageMyFoods = () => {
  const table = useReactTable({
    title:' React Table',
  });

  return (
    <>
      <div className="max-w-7xl md:mx-auto mx-5 my-16 ">
        
      </div>

      {/* footer section here */}
      <Footer />
    </>
  );
};

export default ManageMyFoods;

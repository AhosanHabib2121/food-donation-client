import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import FeaturedFoods from "./FeaturedFoods";


const Home = () => {
    return (
        <div>
            {/* banner section here */}
            <Banner />
            
            {/* featured food section here */}
            <FeaturedFoods/>

            {/* footer section here */}
            <Footer/>   
        </div>
    );
};

export default Home;
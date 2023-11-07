import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import FeaturedFoods from "./FeaturedFoods";
import Questions from "./questions";


const Home = () => {
    return (
        <div>
            {/* banner section here */}
            <Banner />
            
            {/* featured food section here */}
            <FeaturedFoods />
            
            {/* questions section here */}
            <Questions/>

            {/* footer section here */}
            <Footer/>   
        </div>
    );
};

export default Home;
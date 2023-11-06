import foodDonatin1 from '../../assets/foodDonatin1.jpg'
import foodDonatin2 from '../../assets/foodDonatin2.jpg'

const Banner = () => {
    return (
      <div className="carousel w-full h-[600px] ">
        {/* slide1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={foodDonatin1} className="w-full object-cover" />

          {/* content area */}
          <div className="absolute flex items-center h-full right-0 left-0 bg-gradient-to-r from-[#1f2b3bd2] to-[rgba(31, 43, 59, 0.92)]">
            <div className="text-white space-y-7 px-2 w-full lg:w-1/2 lg:mx-auto">
              <h2 className=" text-4xl lg:text-6xl font-bold text-center ">
                The Impactful Practice of Food Donation
              </h2>
              <p className="text-center w-1/2 mx-auto lg:w-full">
                Food donation is the act of providing food to individuals or
                organizations in need, typically for humanitarian or charitable
                purposes
              </p>
              {/* button area */}
              <div className=" text-center ">
                <button className="btn bg-[#112A46] hover:bg-white hover:text-[#112A46] border-0 text-white mr-5 normal-case text-lg">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* arrow button here */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slide2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={foodDonatin2} className="w-full object-cover" />

          {/* content area */}
          <div className="absolute flex items-center h-full right-0 left-0 bg-gradient-to-r from-[#1f2b3bd2] to-[rgba(31, 43, 59, 0.92)]">
            <div className="text-white space-y-7 px-2 w-full lg:w-1/2 lg:mx-auto">
              <h2 className=" text-4xl lg:text-6xl font-bold text-center ">
                Food Sharing Societal Implications
              </h2>
              <p className="text-center w-1/2 mx-auto lg:w-full">
                Food donation is the act of providing food to individuals or
                organizations in need, typically for humanitarian or charitable
                purposes
              </p>
              {/* button area */}
              <div className=" text-center ">
                <button className="btn bg-[#ffb606] hover:bg-white hover:text-[#112A46] border-0 text-white mr-5 normal-case text-lg">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* arrow button here */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;

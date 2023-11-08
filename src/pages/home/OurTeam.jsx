import teamPhoto1 from '../../assets/teamPhoto1.jpg'
import teamPhoto2 from '../../assets/teamPhoto2.jpg'
import teamPhoto3 from '../../assets/teamPhoto3.jpg'

const OurTeam = () => {
    return (
        <div className="max-w-7xl lg:mx-auto mx-5 my-14">
            {/* head title here */}
            <div className=" mb-12">
            <h2 className=" text-[#112A46] text-4xl font-bold text-center">
                Our Team
            </h2>
            <p className=" max-w-md mx-auto text-center text-sm mt-2 text-[#4b4a4a]">
                Connecting generosity with hunger relief. Join us in the mission to make a difference, one meal at a time.
            </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card glass">
                    <figure><img src={teamPhoto1} className=' max-h-max' alt="car!"/></figure>
                    <div className="card-body p-4">
                        <h3><span className=' text-lg font-semibold'>Non-Perishable Food Donations:</span> These include items with a longer shelf life, such as canned goods, pasta, rice, dried beans, and packaged foods. Non-perishable donations are essential for food banks and emergency relief efforts, as they can be stored for extended periods without spoiling.</h3>
                    </div>
                </div>
                <div className="card glass">
                    <figure><img src={teamPhoto2} alt="car!"/></figure>
                    <div className="card-body p-4">
                        <h3><span className=' text-lg font-semibold'> Perishable Food Donations:</span> This category encompasses fresh fruits, vegetables, dairy products, meat, and other items that have a shorter shelf life. Perishable food donations are crucial for providing nutritious options to those in need but require prompt distribution to prevent spoilage.</h3>
                    </div>
                </div>
                <div className="card glass">
                    <figure><img src={teamPhoto3} alt="car!"/></figure>
                    <div className="card-body p-4">
                        <h3><span className=' text-lg font-semibold'>Prepared Meal Donations:</span>  Prepared meals are ready-to-eat dishes that are often donated by restaurants, caterers, or community organizations. These donations are convenient for immediate consumption and can provide hot, balanced meals to individuals experiencing food insecurity.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
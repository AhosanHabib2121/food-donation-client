
const Questions = () => {
    return (
        <div className=" bg-[#c5c5c5] py-14">
            <div className="max-w-7xl lg:mx-auto mx-5 mt-10">
            {/* head title here */}
            <div className=" mb-12">
                <h2 className=" text-[#112A46] text-4xl font-bold text-center">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    1.How do I volunteer at the Food Bank?
                </div>
                <div className="collapse-content"> 
                    <p>Signing up to volunteer at the San Francisco-Marin Food Bank is easy! Create an account and respond to an opportunity as an individual or as a Team. Each person must have a reservation. Check out all our volunteering programs below:
                    Partner Food Pantries

                    Pop-up Food Pantries

                    San Francisco Warehouse

                    Illinois Warehouse (located in San Francisco)

                    Marin Warehouse

                    Shop Floor

                    Home-Delivered Groceries  (background check required)</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    2.What do Food Bank volunteers do?
                </div>
                <div className="collapse-content"> 
                    <p>Volunteers in the warehouse assist with building grocery bags, organizing produce, repackaging food items, sorting through food donations, assembling grocery boxes for seniors, and many other projects.

                    At Food Pantries, volunteers set up and distribute groceries, and clean up the site. You should expect to lift up to 30 pounds repeatedly and interact with participants receiving their groceries.

                    Shop Floor volunteers maintain, stock, and rotate the inventory and provide customer service to Shop Partners as they select groceries for soup kitchens, after school programs, etc.

                    Home-Delivered Groceries volunteers use their own car to drop off fresh groceries to participants.

                    Check out detailed information about all these volunteer opportunities above.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    3.Do you have team volunteer opportunities? How many people can you accommodate?
                </div>
                <div className="collapse-content"> 
                    <p>Volunteering at the Food Bank is a great team-building opportunity! Teams of all sizes, up to the shift’s existing capacity, are welcome. Each person must have their own reservation within the Team. Please contact us at volunteer@sfmfoodbank.org with any questions about team volunteering opportunities.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Questions;
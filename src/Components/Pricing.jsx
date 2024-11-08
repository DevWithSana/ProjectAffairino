import { useState } from "react";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const packages = [
        {
            name: "Free",
            monthlyPrice: 0,
            yearlyPrice: 0,
            description: "Get started with the basic plan.",
            green: "/src/assets/Rectangle1.jpg",
            quotes: 3
        },
        {
            name: "Pro",
            monthlyPrice: 9.99,
            yearlyPrice: 119.99,
            description: "Get more advanced.",
            green: "/src/assets/Rectangle1.jpg",
            quotes: 30
        },
        {
            name: "Business",
            monthlyPrice: 29.99,
            yearlyPrice: 359.99,
            description: "For big business.",
            green: "/src/assets/Rectangle1.jpg",
            quotes: "Unlimited"
        }
    ];

    return (
        <div className="md-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Here are all our plans</h2>
                <p className="text-tertiary md:w-1/3 mx-auto px-4">
                    A simple paragraph is comprised of three major components. The witch is often a declarative sentence.
                </p>

                {/* Toggle pricing */}
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </div>
            </div>

            {/* Pricing cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map((pkg, index) => (
                        <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                            <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                            <p className="text-tertiary text-center">{pkg.description}</p>
                            <p>
                                {isYearly ? `$${pkg.yearlyPrice.toFixed(2)}` : `$${pkg.monthlyPrice.toFixed(2)}`} 
                                <span className="text-base text-tertiary font-medium">/{isYearly ? 'year' : 'month'}</span>
                            </p>
                            <ul className="mt-4 space-y-2 px-4">
                                <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" /> {pkg.quotes} quotes</li>
                                <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" /> Videos of Lessons</li>
                                <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" /> Support included</li>
                            </ul>
                            <div className="w-full mx-auto mt-8 flex items-center justify-center">
                                <button className="btnPrimary">Get started</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Pricing;

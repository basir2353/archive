import React, { useState } from "react";
import HeadingTwo from "./headingTwo";

const Plan = ({ onSelectAddress }) => {
  const [address, setAddress] = useState(""); // Stores the user's input for address
  const [city, setCity] = useState(""); // Stores the user's input for city
  const [zipCode, setZipCode] = useState(""); // Stores the user's input for zip/postal code
  const [error, setError] = useState(null); // Error state
  const [hoverState, setHoverState] = useState(0); // Tracks hover state (0 for address, 1 for city, 2 for zip)

  // Function to handle submission and combine the address parts
  const handleSubmit = () => {
    if (address && city && zipCode) {
      const fullAddress = `${address}, ${city}, ${zipCode}`;
      onSelectAddress(fullAddress);
      console.log(fullAddress);
    } else {
      setError("Please fill out all fields");
    }
  };

  // Function to switch hover text based on hoverState
  const handleHoverText = () => {
    if (hoverState === 0) return address ? address : "Hover for Address";
    if (hoverState === 1) return city ? city : "Hover for City";
    if (hoverState === 2) return zipCode ? zipCode : "Hover for Zip Code";
    return "Submit Address";
  };

  return (
    <div>
      <HeadingTwo
        title="Short-Term Rental"
        desc="Reclaim your life! Book our top-rated Airbnb cleaners for the ultimate guest experience."
      />
      <h3 className="flex justify-center text-lg text-gray-700 m-2">
        Where would you like us to clean?
      </h3>
      <div className="grid md:grid-cols-1 md:grid-rows-1">
        <div className="flex justify-center h-[100%] pb-20">
          <div className="bg-white rounded-lg p-0 w-full max-w-lg">
            <div className="mb-6">
              <div className="flex flex-col space-y-4">
                {/* Address Input */}
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                {/* City Input */}
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                {/* Zip/Postal Code Input */}
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-1">Zip/Postal Code</label>
                  <input
                    type="text"
                    placeholder="Enter your zip or postal code"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100"
                style={{ backgroundColor: "transparent" }}
              >
Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;

import React, { useState } from "react";
import HeadingTwo from "./headingTwo";

const Contact = ({ name, setName, phone, setPhone, email, setEmail }) => {
  const [error, setError] = useState(null); // Error state

  // Function to handle submission and check for required fields
  const handleSubmit = () => {
    if (!name || !phone || !email) {
      setError("All fields are required"); // Set error if any field is empty
    } else {
      setError(null); // Clear the error if all fields are filled
      // Proceed with the submission logic
      console.log("Form submitted successfully with:", { name, phone, email });
    }
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
                {/* Name Input */}
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Phone Number Input */}
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

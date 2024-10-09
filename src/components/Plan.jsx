import React, { useState, useEffect } from "react";
import HeadingTwo from "./headingTwo";
import axios from "axios";

const Plan = ({ onSelectAddress }) => {
  const [keyAddress, setKeyAddress] = useState(""); // Stores the user's input
  const [suggestions, setSuggestions] = useState([]); // Stores the address suggestions
  const [loading, setLoading] = useState(false); // Loading state for API call
  const [error, setError] = useState(null); // Error state

  // Effect to fetch data from Photon API when the user types
  useEffect(() => {
    if (keyAddress.length > 2) { // Only fetch when the input length is greater than 2
      setLoading(true);
      setError(null);

      axios
        .get(`https://photon.komoot.io/api/?q=${keyAddress}`)
        .then((response) => {
          setSuggestions(response.data.features); // Extract address suggestions
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch suggestions");
          setLoading(false);
        });
    } else {
      setSuggestions([]); // Clear suggestions if input is too short
    }
  }, [keyAddress]);

  return (
    <div>
      <HeadingTwo
        title="Short-Term Rental"
        desc="Reclaim your life! Book our top-rated Airbnb cleaners for the ultimate guest experience."
      />
      <h3 className="flex justify-center text-lg text-gray-700 m-2">
        Tell us about your unit
      </h3>
      <div className="grid md:grid-cols-1 md:grid-rows-1">
        <div className="flex justify-center h-[100%] pb-20">
          <div className="bg-white rounded-lg p-0 w-full max-w-lg">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full address, zip or postal code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={keyAddress}
                  onChange={(e) => setKeyAddress(e.target.value)}
                />
                <button
                  className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setKeyAddress("")}
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Suggestion List */}
            <div className="h-[200px] overflow-auto">
              {loading ? (
                <p className="text-gray-500 text-center mt-4">Loading...</p>
              ) : error ? (
                <p className="text-red-500 text-center mt-4">{error}</p>
              ) : suggestions.length === 0 ? (
                <p className="text-gray-500 text-center mt-4">No results found</p>
              ) : (
                <ul className="list-none p-0">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => onSelectAddress(suggestion)}
                    >
                      {suggestion.properties.name}, {suggestion.properties.city} {suggestion.properties.countrycode},{" "}
                      {suggestion.properties.country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;

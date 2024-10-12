import React from "react";
import SectionHeading from "./SectionHeading";

const AddonsExtras = ({
  ironing,
  setIroning,
  interiorCleaning,
  setInteriorCleaning,
  microwaveCleaningHours,
  setMicrowaveCleaningHours,
  ownSupplies,
  setOwnSupplies,
  petType,
  setPetType,
  hobAndChimneyCleaning, // New state for hob and chimney cleaning
  setHobAndChimneyCleaning, // New setter function for hob and chimney cleaning
}) => {
  // Define max values
  const maxIroning = 10;
  const maxInteriorCleaning = 10;
  const maxMicrowaveCleaningHours = 8;

  // Increment and decrement functions
  const increment = (value, setter, max) =>
    setter(prev => (prev + value <= max ? prev + value : prev));
  const decrement = (value, setter, min = 0) =>
    setter(prev => (prev - value >= min ? prev - value : min));

  return (
    <div>
      <SectionHeading
        title="Extra services"
        desc=""
      />
      {/* Ironing Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex-[3]">
          <p className="text-lg text-gray-800">Ironing</p>
          <p className="text-sm text-gray-500">Ironing the clothes</p>
        </div>
        <div className="flex items-center flex-1">
          <button
            onClick={() => decrement(1, setIroning)}
            className="py-[0px] px-[8px] bg-gray-100 rounded-full"
          >
            -
          </button>
          <span className="mx-3 text-lg min-w-[2rem] text-center">
            {ironing}
          </span>
          <button
            onClick={() => increment(1, setIroning, maxIroning)}
            className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${ironing === maxIroning ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={ironing === maxIroning}
          >
            +
          </button>
        </div>
      </div>

      {/* Interior Cleaning Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex-[3]">
          <p className="text-lg text-gray-800">Interior Cleaning</p>
          <p className="text-sm text-gray-500">Clean your interior showcases</p>
        </div>
        <div className="flex items-center flex-1">
          <button
            onClick={() => decrement(1, setInteriorCleaning)}
            className="py-[0px] px-[8px] bg-gray-100 rounded-full"
          >
            -
          </button>
          <span className="mx-3 text-lg min-w-[2rem] text-center">
            {interiorCleaning}
          </span>
          <button
            onClick={() => increment(1, setInteriorCleaning, maxInteriorCleaning)}
            className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${interiorCleaning === maxInteriorCleaning ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={interiorCleaning === maxInteriorCleaning}
          >
            +
          </button>
        </div>
      </div>

      {/* Microwave Cleaning Hours Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex-[3]">
          <p className="text-lg text-gray-800">Microwave Cleaning</p>
          <p className="text-sm text-gray-500">Microwave cleaning service</p>
        </div>
        <div className="flex items-center flex-1">
          <button
            onClick={() => decrement(1, setMicrowaveCleaningHours, 0)}
            className="py-[0px] px-[8px] bg-gray-100 rounded-full"
          >
            -
          </button>
          <span className="mx-3 text-lg min-w-[2rem] text-center">
            {microwaveCleaningHours}
          </span>
          <button
            onClick={() => increment(1, setMicrowaveCleaningHours, maxMicrowaveCleaningHours)}
            className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${microwaveCleaningHours === maxMicrowaveCleaningHours ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={microwaveCleaningHours === maxMicrowaveCleaningHours}
          >
            +
          </button>
        </div>
      </div>

      {/* Hob and Chimney Cleaning Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex-[3]">
          <p className="text-lg text-gray-800">Hob and Chimney Cleaning</p>
          <p className="text-sm text-gray-500">Cleaning your hob and chimney</p>
        </div>
        <div className="flex items-center flex-1">
          <button
            onClick={() => setHobAndChimneyCleaning(!hobAndChimneyCleaning)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 ${hobAndChimneyCleaning ? 'bg-pink-500' : 'bg-gray-300'}`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${hobAndChimneyCleaning ? 'translate-x-6' : 'translate-x-1'}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Supplies Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex-[3]">
          <p className="text-lg text-gray-800">I will provide cleaning supplies</p>
        </div>
        <div className="flex items-center flex-1">
          <button
            onClick={() => setOwnSupplies(!ownSupplies)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 ${ownSupplies ? 'bg-pink-500' : 'bg-gray-300'}`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${ownSupplies ? 'translate-x-6' : 'translate-x-1'}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Pet Type Section */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg text-gray-800">Any Pets?</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <input
            id="dog-radio"
            type="radio"
            value="Dog"
            name="pet-radio"
            onChange={() => setPetType("Dog")}
            checked={petType === "Dog"}
          />
          <label htmlFor="dog-radio" className="ms-2 text-sm font-medium text-gray-900">
            Dog
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="cat-radio"
            type="radio"
            value="Cat"
            name="pet-radio"
            onChange={() => setPetType("Cat")}
            checked={petType === "Cat"}
          />
          <label htmlFor="cat-radio" className="ms-2 text-sm font-medium text-gray-900">
            Cat
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="other-radio"
            type="radio"
            value="Other"
            name="pet-radio"
            onChange={() => setPetType("Other")}
            checked={petType === "Other"}
          />
          <label htmlFor="other-radio" className="ms-2 text-sm font-medium text-gray-900">
            Other
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="none-radio"
            type="radio"
            value="None"
            name="pet-radio"
            onChange={() => setPetType("None")}
            checked={petType === "None"}
          />
          <label htmlFor="none-radio" className="ms-2 text-sm font-medium text-gray-900">
            None
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddonsExtras;

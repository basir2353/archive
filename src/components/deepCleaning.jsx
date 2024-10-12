import React, { useState } from "react";
import AddonComponent from "./AddonComponent";
import SectionHeading from "./SectionHeading";

const DeepCleaning = ({ currentStep, onBoxCheck, planDuration, addonOptions }) => {
    const [rooms, setRooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(0);
    const [receptionRooms, setReceptionRooms] = useState(0);
    const [kitchens, setKitchens] = useState(0);
    const [toilets, setToilets] = useState(0);
    const [hours, setHours] = useState(0);
    const [ownSupplies, setOwnSupplies] = useState(true);
    const [washLinen, setWashLinen] = useState(false);
    const [insideKitchenCabinets, setInsideKitchenCabinets] = useState(false); // New state for the inside kitchen cabinets toggle

    // Define max values
    const maxRooms = 10;
    const maxBathrooms = 10;
    const maxReceptionRooms = 5;
    const maxKitchens = 5;
    const maxToilets = 10;
    const maxHours = 8;

    const increment = (value, setter, max) => setter(prev => (prev + value <= max ? prev + value : prev));
    const decrement = (value, setter, min = 0) => setter(prev => (prev - value >= min ? prev - value : min));

    return (
        <div>
            <SectionHeading
                title="Deep Cleaning Information"
                desc="Add-ons help enhance your cleaning experience."
            />
            <div className="space-y-5">
                <div className="bg-white rounded-xl p-6">
                    {/* Bathrooms */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Bathrooms</p>
                            <p className="text-sm text-gray-500">bathroom is counted as whole number</p>
                        </div>
                        <div className="flex items-center flex-1">
                            <button onClick={() => decrement(1, setBathrooms)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{bathrooms}</span>
                            <button
                                onClick={() => increment(1, setBathrooms, maxBathrooms)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${bathrooms === maxBathrooms ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={bathrooms === maxBathrooms}
                            >+</button>
                        </div>
                    </div>

                    {/* Reception Rooms */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Reception Rooms</p>
                            <p className="text-sm text-gray-500">number of reception rooms</p>
                        </div>
                        <div className="flex items-center flex-1">
                            <button onClick={() => decrement(1, setReceptionRooms)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{receptionRooms}</span>
                            <button
                                onClick={() => increment(1, setReceptionRooms, maxReceptionRooms)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${receptionRooms === maxReceptionRooms ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={receptionRooms === maxReceptionRooms}
                            >+</button>
                        </div>
                    </div>

                    {/* Kitchens */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Kitchens</p>
                            <p className="text-sm text-gray-500">number of kitchens</p>
                        </div>
                        <div className="flex items-center flex-1">
                            <button onClick={() => decrement(1, setKitchens)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{kitchens}</span>
                            <button
                                onClick={() => increment(1, setKitchens, maxKitchens)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${kitchens === maxKitchens ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={kitchens === maxKitchens}
                            >+</button>
                        </div>
                    </div>

                    {/* Toilets */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Toilets</p>
                            <p className="text-sm text-gray-500">number of toilets</p>
                        </div>
                        <div className="flex items-center flex-1">
                            <button onClick={() => decrement(1, setToilets)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{toilets}</span>
                            <button
                                onClick={() => increment(1, setToilets, maxToilets)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${toilets === maxToilets ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={toilets === maxToilets}
                            >+</button>
                        </div>
                    </div>

                    {/* Estimated Hours */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Estimated Hours (hrs)</p>
                            <p className="text-sm text-gray-500">we estimate 1.75 hours of cleaning </p>
                            <p className="text-sm text-gray-500">(minimum 1.5 hours)</p>
                        </div>
                        <div className="flex items-center flex-1">
                            <button onClick={() => decrement(0.25, setHours, 1.5)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{hours}</span>
                            <button
                                onClick={() => increment(0.25, setHours, maxHours)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${hours === maxHours ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={hours === maxHours}
                            >+</button>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Supplies & linen requests</h3>

                    {/* Own Supplies */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">I have my own supplies</span>
                        <button onClick={() => setOwnSupplies(!ownSupplies)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${ownSupplies ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${ownSupplies ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Wash and Dry Linen */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Wash and dry linen and towels</span>
                        <button onClick={() => setWashLinen(!washLinen)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${washLinen ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${washLinen ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Inside Kitchen Cabinets */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Inside Kitchen Cabinets</span>
                        <button onClick={() => setInsideKitchenCabinets(!insideKitchenCabinets)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${insideKitchenCabinets ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${insideKitchenCabinets ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeepCleaning;

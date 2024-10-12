import React from "react";
import SectionHeading from "./SectionHeading";

const EndTenancy = ({
    currentStep,
    rooms,
    setRooms,
    bathrooms,
    setBathrooms,
    receptionRooms,
    setReceptionRooms,
    kitchens,
    setKitchens,
    toilets,
    setToilets,
    hours,
    setHours,
    ownSupplies,
    setOwnSupplies,
    washLinen,
    setWashLinen,
}) => {
    const maxRooms = 10;
    const maxBathrooms = 10;
    const maxReceptionRooms = 5;
    const maxKitchens = 5;
    const maxToilets = 10;
    const maxHours = 7.5;

    const increment = (value, setter, max) => setter(prev => (prev + value <= max ? prev + value : prev));
    const decrement = (value, setter, min = 0) => setter(prev => (prev - value >= min ? prev - value : min));

    return (
        <div>
            <SectionHeading title="End Tenancy Cleaning Information" desc="Add-ons help enhance your cleaning experience." />
            <div className="space-y-5">
                <div className="bg-white rounded-xl p-6">
                    {/* Rooms */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Rooms</p>
                            <p className="text-sm text-gray-500">Number of bedrooms and other rooms</p>
                        </div>
                        <div className="flex items-center flex-1">
                            <button onClick={() => decrement(1, setRooms)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{rooms}</span>
                            <button
                                onClick={() => increment(1, setRooms, maxRooms)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${rooms === maxRooms ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={rooms === maxRooms}
                            >+</button>
                        </div>
                    </div>

                    {/* Bathrooms */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Bathrooms</p>
                            <p className="text-sm text-gray-500">Number of bathrooms</p>
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
                            <p className="text-sm text-gray-500">Number of reception rooms</p>
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
                            <p className="text-sm text-gray-500">Number of kitchens</p>
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
                            <p className="text-sm text-gray-500">Number of toilets</p>
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
                </div>
            </div>
        </div>
    );
};

export default EndTenancy;

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
    ironing,
    setIroning,
    interiorCleaning,
    setInteriorCleaning,
}) => {
    const maxRooms = 10;
    const maxBathrooms = 10;
    const maxReceptionRooms = 5;
    const maxKitchens = 5;
    const maxToilets = 10;
    const maxHours = 7.5;
    const maxIroning = 10;
    const maxInteriorCleaning = 10;

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
                            <p className="text-sm text-gray-500">rooms including bedrooms and other rooms</p>
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

                    {/* Additional fields for ironing and interior cleaning */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Ironing</p>
                            <p className="text-sm text-gray-500">Ironing the clothes</p>
                        </div>
                        <div className="flex items-center flex-1">
                            <button onClick={() => decrement(1, setIroning)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{ironing}</span>
                            <button
                                onClick={() => increment(1, setIroning, maxIroning)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${ironing === maxIroning ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={ironing === maxIroning}
                            >+</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-[3]">
                            <p className="text-lg text-gray-800">Interior Cleaning</p>
                            <p className="text-sm text-gray-500">Clean your interior showcases</p>
                        </div>
                        <div className="flex items-center flex-1">
                            <button onClick={() => decrement(1, setInteriorCleaning)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{interiorCleaning}</span>
                            <button
                                onClick={() => increment(1, setInteriorCleaning, maxInteriorCleaning)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${interiorCleaning === maxInteriorCleaning ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={interiorCleaning === maxInteriorCleaning}
                            >+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndTenancy;

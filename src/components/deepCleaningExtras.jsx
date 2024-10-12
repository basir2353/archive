import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

const DeepCleaningExtras = ({ addonOptions }) => {
    // Oven selection state
    const [ovenType, setOvenType] = useState("single_oven");

    // States for on/off switches
    const [fridgeCleaning, setFridgeCleaning] = useState(false);
    const [hobCleaning, setHobCleaning] = useState(false);
    const [microwaveCleaning, setMicrowaveCleaning] = useState(false);
    const [dishwasher, setDishwasher] = useState(false);
    const [washingMachine, setWashingMachine] = useState(false);
    const [kitchenCabinets, setKitchenCabinets] = useState(false);
    const [hooveringCleaning, setHooveringCleaning] = useState(false);
    const [conservatory, setConservatory] = useState(false);
    const [keyPickDrop, setKeyPickDrop] = useState(false);

    // State for interior window cleaning
    const [windowCleaning, setWindowCleaning] = useState(0);
    const maxWindowCleaning = 10;

    // Increment and Decrement functions for window cleaning
    const increment = (value, setter, max) => setter(prev => (prev + value <= max ? prev + value : prev));
    const decrement = (value, setter, min = 0) => setter(prev => (prev - value >= min ? prev - value : min));

    // Form fields for ovens
    const ovenOptions = [
        { id: 1, name: "Single Oven", value: "single_oven" },
        { id: 2, name: "Double Oven", value: "double_oven" },
        { id: 3, name: "Range Oven", value: "range_oven" },
    ];

    return (
        <div>
            <SectionHeading
                title="Extra Services"

            />

            {/* Oven Type Selection */}
            <div className="space-y-5">
                <div className="bg-white rounded-xl">
                    <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Select Oven Type</h3>
                    <ul className="grid w-full gap-2 md:grid-cols-3" style={{ marginBottom: '10px' }}>
                        {ovenOptions.map((item) => (
                            <li key={item.id}>
                                <input
                                    type="radio"
                                    id={item.value}
                                    name="oven-type"
                                    value={item.value}
                                    className="hidden peer"
                                    onChange={(e) => setOvenType(e.target.value)}
                                    checked={ovenType === item.value}
                                />
                                <label
                                    htmlFor={item.value}
                                    className="inline-flex items-center justify-between w-full px-4 py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:peer-checked:text-blue-500"
                                >
                                    <div className="w-full text-lg font-semibold">{item.name}</div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Other cleaning extras below */}
                <div className="bg-white rounded-xl p-6">
                    {/* Fridge Cleaning */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Fridge Cleaning</span>
                        <button onClick={() => setFridgeCleaning(!fridgeCleaning)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${fridgeCleaning ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${fridgeCleaning ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Hob Cleaning */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Hob Cleaning</span>
                        <button onClick={() => setHobCleaning(!hobCleaning)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${hobCleaning ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${hobCleaning ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Microwave Cleaning */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Microwave Cleaning</span>
                        <button onClick={() => setMicrowaveCleaning(!microwaveCleaning)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${microwaveCleaning ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${microwaveCleaning ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Dishwasher */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Dishwasher</span>
                        <button onClick={() => setDishwasher(!dishwasher)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${dishwasher ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${dishwasher ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Washing Machine */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Washing Machine</span>
                        <button onClick={() => setWashingMachine(!washingMachine)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${washingMachine ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${washingMachine ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Interior Window Cleaning */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Interior Window Cleaning</span>
                        <div className="flex items-center">
                            <button onClick={() => decrement(1, setWindowCleaning)} className="py-[0px] px-[8px] bg-gray-100 rounded-full">-</button>
                            <span className="mx-3 text-lg min-w-[2rem] text-center">{windowCleaning}</span>
                            <button
                                onClick={() => increment(1, setWindowCleaning, maxWindowCleaning)}
                                className={`py-[0px] px-[8px] bg-gray-100 rounded-full ${windowCleaning === maxWindowCleaning ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={windowCleaning === maxWindowCleaning}
                            >+</button>
                        </div>
                    </div>

                    {/* Inside Kitchen Cabinets */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Inside Kitchen Cabinets</span>
                        <button onClick={() => setKitchenCabinets(!kitchenCabinets)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${kitchenCabinets ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${kitchenCabinets ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Hoovering Cleaning */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Hoovering Cleaning</span>
                        <button onClick={() => setHooveringCleaning(!hooveringCleaning)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${hooveringCleaning ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${hooveringCleaning ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Conservatory */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Conservatory</span>
                        <button onClick={() => setConservatory(!conservatory)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${conservatory ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${conservatory ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>

                    {/* Key Pick/Drop */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg text-gray-800">Key Pick/Drop</span>
                        <button onClick={() => setKeyPickDrop(!keyPickDrop)} className={`relative inline-flex items-center h-6 rounded-full w-11 ${keyPickDrop ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${keyPickDrop ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeepCleaningExtras;

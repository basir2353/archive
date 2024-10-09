import React, { useState, useEffect } from "react";

import SectionHeading from "./SectionHeading";

const OvenCleaning = ({ onChangeOvenService }) => {
    const [formFields, setFormFields] = useState([
        {
            id: 1,
            name: "Single Oven",
            label: "Name",
            placeholder: "e.g John Doe",
            value: 'single_oven',
            src: ""
        },
        {
            id: 2,
            name: "Double Oven",
            label: "Email Address",
            placeholder: "e.g john@gmail.com",
            value: 'double_oven',
            src: ""
        },
        {
            id: 3,
            name: "Range Oven",
            label: "Phone Number",
            placeholder: "e.g +1 234 567 890",
            value: 'range_oven',
            src: ""
        },
    ]);

    return (
        <div>
            <SectionHeading
                title="Oven Cleaning Information"
                desc="Add-ons help enhance your cleaning experience."
            />
            <div>
                <div className="flex flex-col space-y-6 text-[14px]">

                    <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">Which service you want ?</h3>
                    <ul class="grid w-full gap-2 md:grid-cols-3" style={{ marginBottom: '10px' }}>
                        {formFields.map((item) => <li>
                            <input type="radio" id={item?.value} name="service" value={item?.value} class="hidden peer" onChange={(e) => onChangeOvenService(e.target.value)} />
                            <label for={item?.value} class="inline-flex items-center justify-between w-full px-4 py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="flex flex-col">
                                    <img src={item.src} alt="" />
                                    <div class="w-full text-lg font-semibold">{item?.name}</div>
                                </div>
                            </label>
                        </li>)}

                    </ul>



                </div>
            </div>
        </div>

    );
};

export default OvenCleaning;


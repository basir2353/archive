import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ onChangeYourInfo }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "House Cleaning",
      des: 'Regular cleaning of house',
      label: "Name",
      placeholder: "e.g John Doe",
      value: 'house_cleaning',
      src: '/housecleaning.svg'
    },
    {
      id: 2,
      name: "Deep Cleaning",
      des: 'Regular cleaning of house',
      label: "Email Address",
      placeholder: "e.g john@gmail.com",
      value: 'deep_cleaning',
      src: '/numberofbathrooms.svg'

    },
    {
      id: 3,
      name: "End of Tenancy Cleaning",
      des: 'Regular cleaning of house',
      label: "Phone Number",
      placeholder: "e.g +1 234 567 890",
      value: 'end_tenancy_cleaning',
      src: '/clockroomstoilet.svg'

    },
    {
      id: 3,
      name: "Oven Cleaning",
      des: 'Regular cleaning of house',
      label: "Phone Number",
      placeholder: "e.g +1 234 567 890",
      value: 'oven_cleaning',
      src: '/noofbedrooms.svg'
    }
  ]);


  return (
    <div>
      <SectionHeading
        title="Please select the services"

      />
      <form>
        <div className="flex flex-col space-y-6 text-[14px]">


          <ul class="grid w-full gap-2 md:grid-cols-1" style={{ marginBottom: '10px' }}>
            {formFields.map((item) => <li>
              <input type="radio" id={item?.value} name="service" value={item?.value} class="hidden peer" onChange={(e) => onChangeYourInfo(e.target.value)} />
              <label for={item?.value} class="inline-flex items-center justify-between w-full px-4 py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                <div class="flex gap-3">
                  <img src={item.src} alt="" width={'40px'} />
                  <div className="block">
                    <div class="w-full text-lg font-semibold">{item?.name}</div>
                    <div class="w-full">{item?.des}</div>
                  </div>
                </div>
                <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </label>
            </li>)}

          </ul>



        </div>
      </form>
    </div>
  );
};

export default YourInfo;

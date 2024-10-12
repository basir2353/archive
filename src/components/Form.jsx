import React, { useEffect, useState } from "react";
import YourInfo from "./YourInfo";
import Plan from "./Plan";
import BackgroundSidebar from "../assets/images/bg-sidebar-desktop.svg";
import BackgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import Step from "./Step";
import Addons from "./Addons";
import Summary from "./Summary";
import Thankyou from "./Thankyou";

import arcadeLogo from "../assets/images/icon-arcade.svg";
import advancedLogo from "../assets/images/icon-advanced.svg";
import proLogo from "../assets/images/icon-pro.svg";
import DeepCleaning from "./deepCleaning";
import EndTenancy from "./endTenancy";
import OvenCleaning from "./ovenCleaning";
import AddonsExtras from "./AddonsExtras";
import DeepCleaningExtras from "./deepCleaningExtras";
import CalendarComponent from "./datePicker";
import axios from "axios";
import Contact from "./contact";

const Form = () => {
  //------------------------------STATES------------------------------
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [ovenServiceData, setOvenServiceData] = useState("");

  const [steps, setSteps] = useState([
    { id: 1, title: "YOUR INFO", active: true },
    { id: 2, title: "SELECT PLAN", active: false },
    { id: 3, title: "ADD-ONS", active: false },
    { id: 4, title: "SUMMARY", active: false },
  ]);

  const [yourInfo, setYourInfo] = useState({
    service: ""
  });

  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:30 PM");

  const [microwaveCleaningHours, setMicrowaveCleaningHours] = useState(1.75);

  const [petType, setPetType] = useState("None");

  const [rooms, setRooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(0);
  const [kitchens, setKitchens] = useState(0);
  const [toilets, setToilets] = useState(0);
  const [hours, setHours] = useState(0);
  const [ownSupplies, setOwnSupplies] = useState(true);
  const [washLinen, setWashLinen] = useState(false);
  const [receptionRooms, setReceptionRooms] = useState(1); // New
  const [kitchenIncluded, setKitchenIncluded] = useState(false); // New toggle
  const [cloakroomToilets, setCloakroomToilets] = useState(1); // New
  const [hobAndChimneyCleaning, setHobAndChimneyCleaning] = useState(false);
  const [name, setName] = useState(""); // Stores the user's input for name
  const [phone, setPhone] = useState(""); // Stores the user's input for phone number
  const [email, setEmail] = useState("");
  const [ironing, setIroning] = useState(1);
  const [interiorCleaning, setInteriorCleaning] = useState(1);

  const [isEmpty, setIsEmpty] = useState(false);
  const [isPlanEmpty, setIsPlanEmpty] = useState(false);
  const [planDuration, setPlanDuration] = useState("mo");
  const [planDurationName, setPlanDurationName] = useState("Monthly");

  const [ovenType, setOvenType] = useState("single_oven");
  const [fridgeCleaning, setFridgeCleaning] = useState(false);
  const [hobCleaning, setHobCleaning] = useState(false);
  const [microwaveCleaning, setMicrowaveCleaning] = useState(false);
  const [dishwasher, setDishwasher] = useState(false);
  const [washingMachine, setWashingMachine] = useState(false);
  const [kitchenCabinets, setKitchenCabinets] = useState(false);
  const [hooveringCleaning, setHooveringCleaning] = useState(false);
  const [conservatory, setConservatory] = useState(false);
  const [keyPickDrop, setKeyPickDrop] = useState(false);
  const [windowCleaning, setWindowCleaning] = useState(0);

  const [plan, setPlan] = useState({
    title: "",
    price: 0,
    yearly: false,
  });

  const [address, setAddress] = useState(null);

  const [addonOptions, setAddonOptions] = useState([
    {
      id: 1,
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
      monthlyPrice: 1,
      yearlyPrice: 10,
      selected: false,
    },
    {
      id: 2,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
    {
      id: 3,
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
  ]);

  const [addons, setAddons] = useState([]);

  const [displayThankyou, setDisplayThankyou] = useState(false);
  const API_KEY = "c9f73451b441c38c644062cb95159942f929d1b7";
  const submitData = async () => {


    const data = {
      ovenServiceData,
      yourInfo,
      startDate,
      selectedTime,
      microwaveCleaningHours,
      petType,
      rooms,
      bathrooms,
      receptionRooms,
      kitchens,
      toilets,
      hours,
      ownSupplies,
      washLinen,
      ironing,
      interiorCleaning,
      planDuration,
      ovenType,
      fridgeCleaning,
      hobCleaning,
      microwaveCleaning,
      dishwasher,
      washingMachine,
      kitchenCabinets,
      hooveringCleaning,
      conservatory,
      keyPickDrop,
      windowCleaning,
      address,
    };

    console.log(data);
    try {
      const response = await axios.post(
        "https://app.smartsuite.com/7d0ee70655b438e2deec44a409d8c0ebdaf26314", // Replace with actual endpoint
        data,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error.response?.data || error.message);
    }
    setDisplayThankyou(true)
  };
  //------------------------------SIDE EFFECTS------------------------------
  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }

    // console.log(steps);
    // console.log(stepNumber);
    // console.log(yourInfo);
    // console.log(plan);
    //console.log(addons);
    // console.log(planOptions);
    // console.log(addonOptions);
    // console.log(plan);
    // console.log(isPlanEmpty);
    // console.log(displayThankyou);
    // console.log(planDuration);
  }, [
    stepNumber,
    yourInfo,
    plan,
    addons,
    addonOptions,
    // planOptions,
    isPlanEmpty,
    displayThankyou,
  ]);
  console.log(stepNumber);
  const changeClick = () => {
    setYourInfo((preState) => ({ ...preState, service: 'null' }))

    setStepNumber(3)
  };

  //------------------------------FUNCTIONS------------------------------
  const nextStep = () => {
    if (stepNumber == 1) {
      if (
        yourInfo.service.length == 0
      ) {
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }

    }

    if (stepNumber == 2) {
      if (address.length == 0) {
        setIsPlanEmpty(true);
        return;
      } else {
        setIsPlanEmpty(false);
      }
    }

    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };



  const changeYourInfo = (data) => {
    setYourInfo((prevInfo) => {
      return { ...prevInfo, service: data };
    });
    setStepNumber(2)
  };

  const selectAddress = (address) => {
    setAddress(address);
    setStepNumber(3)
  };
  const toggleDuration = () => {
    if (plan.yearly == false) {
      setPlan((prevPlan) => {
        setPlanDuration("yr");
        setPlanDurationName("Yearly");

        // setPlanOptions((prevPlanOptions) => {
        //   const updatedPlanOptions = prevPlanOptions.map((planOption) => {
        //     return { ...planOption, price: planOption.yearlyPrice };
        //   });
        //   return updatedPlanOptions;
        // });

        setAddonOptions((prevAddonOptions) => {
          const updatedAddonOptions = prevAddonOptions.map((addonOption) => {
            return { ...addonOption, price: addonOption.yearlyPrice };
          });
          return updatedAddonOptions;
        });

        return { ...prevPlan, yearly: true };
      });
    } else {
      setPlan((prevPlan) => {
        setPlanDuration("mo");
        setPlanDurationName("Monthly");

        // setPlanOptions((prevPlanOptions) => {
        //   const updatedPlanOptions = prevPlanOptions.map((planOption) => {
        //     return { ...planOption, price: planOption.monthlyPrice };
        //   });
        //   return updatedPlanOptions;
        // });

        setAddonOptions((prevAddonOptions) => {
          const updatedAddonOptions = prevAddonOptions.map((addonOption) => {
            return { ...addonOption, price: addonOption.monthlyPrice };
          });
          return updatedAddonOptions;
        });

        return { ...prevPlan, yearly: false };
      });
    }

    // setPlan((prevPlan) => {
    //   return { ...prevPlan, yearly: !plan.yearly };
    // });
  };

  const checkBox = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    const title = e.target.getAttribute("data-title-name");
    const price = parseInt(e.target.getAttribute("data-price"));
    if (e.target.checked == true) {
      setAddons((prevAddons) => [
        ...prevAddons,
        { id: id, title: title, price: price },
      ]);
    } else {
      setAddons((prevAddons) => {
        return prevAddons.filter((addon) => addon.id != id);
      });
    }



    setAddonOptions((prevAddons) => {
      const updatedAddons = prevAddons.map((addon) => {
        if (addon.id == id) {
          if (addon.selected == false) {
            return { ...addon, selected: true };
          } else {
            return { ...addon, selected: false };
          }
        } else {
          return addon;
        }
      });
      return updatedAddons;
    });
  };

  const onChangeServiceOven = (data) => {
    setOvenServiceData(data)
  }

  // const selectAddon = (id) => {
  //   setAddonOptions((prevAddons) => {
  //     const updatedAddons = prevAddons.map((addon) => {
  //       if (addon.id == id) {
  //         if (addon.selected == false) {
  //           return { ...addon, selected: true };
  //         } else {
  //           return { ...addon, selected: false };
  //         }
  //       } else {
  //         return addon;
  //       }
  //     });
  //     return updatedAddons;
  //   });
  // };

  return (
    <div className="container">
      <div className="bg-[#d6d9e6] md:bg-white rounded-xl md:p-3 md:flex justify-center">
        {/* <div className="relative">
          <img
            className="hidden md:block"
            src={BackgroundSidebar}
            alt="sidebar"
          />
          <img
            className="block md:hidden w-full"
            src={BackgroundSidebarMobile}
            alt="topbar"
          />

          <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div> */}
        <div className="flex flex-col justify-between w-full h-full lg:top-40 md:top-40 lg:w-[450px] md:w-[450px] lg:h-auto md:h-auto lg:static md:static mb-40 lg:rounded-2xl px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28">
          {displayThankyou ? (
            <>
              <Thankyou />
            </>
          ) : (
            <>
              <div>
                {stepNumber === 1 && (
                  <YourInfo
                    onChangeYourInfo={changeYourInfo}
                    yourInfo={yourInfo}
                    currentStep={stepNumber}
                    isEmpty={isEmpty}
                  />
                )}
                {stepNumber === 2 && (
                  <Plan
                    onSelectAddress={selectAddress}
                    currentStep={stepNumber}
                    isPlanEmpty={isPlanEmpty}
                  />
                )}
                {stepNumber === 3 && (
                  <>
                    {yourInfo.service === "house_cleaning" ? (
                      <Addons
                        rooms={rooms}
                        setRooms={setRooms}
                        bathrooms={bathrooms}
                        setBathrooms={setBathrooms}
                        receptionRooms={receptionRooms} // New field
                        setReceptionRooms={setReceptionRooms} // New field
                        kitchenIncluded={kitchenIncluded} // New field
                        setKitchenIncluded={setKitchenIncluded} // New field
                        cloakroomToilets={cloakroomToilets} // New field
                        setCloakroomToilets={setCloakroomToilets} // New field
                        hours={hours}
                        setHours={setHours}
                        ownSupplies={ownSupplies}
                        setOwnSupplies={setOwnSupplies}
                        washLinen={washLinen}
                        setWashLinen={setWashLinen}
                      />
                    ) : yourInfo.service === "deep_cleaning" ? (
                      <DeepCleaning
                        currentStep={stepNumber}
                        planDuration={planDuration}
                        rooms={rooms}
                        setRooms={setRooms}
                        bathrooms={bathrooms}
                        setBathrooms={setBathrooms}
                        receptionRooms={receptionRooms}
                        setReceptionRooms={setReceptionRooms}
                        kitchens={kitchens}
                        setKitchens={setKitchens}
                        toilets={toilets}
                        setToilets={setToilets}
                        hours={hours}
                        setHours={setHours}
                        ownSupplies={ownSupplies}
                        setOwnSupplies={setOwnSupplies}
                        washLinen={washLinen}
                        setWashLinen={setWashLinen}
                      />
                    ) : yourInfo.service === "end_tenancy_cleaning" ? (
                      <EndTenancy
                        currentStep={stepNumber}
                        rooms={rooms}
                        setRooms={setRooms}
                        bathrooms={bathrooms}
                        setBathrooms={setBathrooms}
                        receptionRooms={receptionRooms}
                        setReceptionRooms={setReceptionRooms}
                        kitchens={kitchens}
                        setKitchens={setKitchens}
                        toilets={toilets}
                        setToilets={setToilets}
                        hours={hours}
                        setHours={setHours}
                        ownSupplies={ownSupplies}
                        setOwnSupplies={setOwnSupplies}
                        washLinen={washLinen}
                        setWashLinen={setWashLinen}
                        ironing={ironing}
                        setIroning={setIroning}
                        interiorCleaning={interiorCleaning}
                        setInteriorCleaning={setInteriorCleaning}
                      />
                    ) : (
                      <OvenCleaning onChangeOvenService={onChangeServiceOven} />
                    )}
                  </>
                )}
                {stepNumber === 4 && (
                  <>
                    {yourInfo.service === "house_cleaning" ? (
                      <AddonsExtras
                        ironing={ironing}
                        setIroning={setIroning}
                        interiorCleaning={interiorCleaning}
                        setInteriorCleaning={setInteriorCleaning}
                        microwaveCleaningHours={microwaveCleaningHours}
                        setMicrowaveCleaningHours={setMicrowaveCleaningHours}
                        ownSupplies={ownSupplies}
                        setOwnSupplies={setOwnSupplies}
                        petType={petType}
                        setPetType={setPetType}
                        hobAndChimneyCleaning={hobAndChimneyCleaning} // New
                        setHobAndChimneyCleaning={setHobAndChimneyCleaning} // New
                      />
                    ) : (
                      <DeepCleaningExtras
                        ovenType={ovenType}
                        setOvenType={setOvenType}
                        fridgeCleaning={fridgeCleaning}
                        setFridgeCleaning={setFridgeCleaning}
                        hobCleaning={hobCleaning}
                        setHobCleaning={setHobCleaning}
                        microwaveCleaning={microwaveCleaning}
                        setMicrowaveCleaning={setMicrowaveCleaning}
                        dishwasher={dishwasher}
                        setDishwasher={setDishwasher}
                        washingMachine={washingMachine}
                        setWashingMachine={setWashingMachine}
                        kitchenCabinets={kitchenCabinets}
                        setKitchenCabinets={setKitchenCabinets}
                        hooveringCleaning={hooveringCleaning}
                        setHooveringCleaning={setHooveringCleaning}
                        conservatory={conservatory}
                        setConservatory={setConservatory}
                        keyPickDrop={keyPickDrop}
                        setKeyPickDrop={setKeyPickDrop}
                        windowCleaning={windowCleaning}
                        setWindowCleaning={setWindowCleaning}
                      />
                    )}
                  </>
                )}
                {stepNumber === 5 && (
                  <CalendarComponent
                    startDate={startDate}
                    setStartDate={setStartDate}
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                  />
                )}
                {
                  stepNumber === 6 && (
                    <Contact name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} />
                  )
                }
              </div>
              <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:static md:p-0 items-center w-[700px]">
                <div
                  onClick={prevStep}
                  className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                >
                  Go back
                </div>
                {stepNumber > 2 && (
                  <>
                    {stepNumber === 6 ? (
                      <div
                        onClick={submitData}
                        className="font-medium bg-[#473dff] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                      >
                        Confirm
                      </div>
                    ) : (
                      <div
                        onClick={nextStep}
                        className="font-medium bg-[#02295a] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                      >
                        Next Step
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;

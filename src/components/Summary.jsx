import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import CalendarComponent from "./datePicker";

const Summary = ({
  currentStep,
  selectedPlan,
  selectedAddons,
  onChangeClick,
  planDuration,
  planDurationName,
}) => {
  const [planPrice, setPlanPrice] = useState(() => selectedPlan.price);
  const [addonsPrice, setAddonsPrice] = useState(() => {
    if (selectedAddons.length == 0) {
      return 0;
    } else {
      let totalAddonsPrice = 0;
      selectedAddons.map((addon) => {
        totalAddonsPrice += addon.price;
      });
      return totalAddonsPrice;
    }
  });
  const [grandTotal, setGrandTotal] = useState(() => planPrice + addonsPrice);

  useEffect(() => {
    // console.log(planPrice);
    // console.log(addonsPrice);
    // console.log(grandTotal);
    // console.log(selectedPlan);
    // console.log(selectedAddons);
  }, [selectedPlan, selectedAddons]);

  return (
    <div>
      <SectionHeading
        title="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />
      <div>
        <CalendarComponent />


      </div>
    </div>
  );
};

export default Summary;

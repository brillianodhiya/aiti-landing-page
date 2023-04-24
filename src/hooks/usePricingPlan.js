import { useState } from "react";

const usePricingPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (isYearly) => {
    setIsYearly(isYearly);
  };

  return {
    isYearly,
    handlePlanSelect,
  };
};

export default usePricingPlan;

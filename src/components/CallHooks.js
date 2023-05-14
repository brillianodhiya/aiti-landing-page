import useBackToTop from "@aiti/hooks/useBackToTop";
import useMobileMenuActivation from "@aiti/hooks/useMobileMenuActivation";
import useSal from "@aiti/hooks/useSal";
import React from "react";

const CallHooks = () => {
  useMobileMenuActivation();
  useBackToTop();
  useSal();
  return <></>;
};

export default CallHooks;

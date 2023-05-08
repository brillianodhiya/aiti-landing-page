import React, { useEffect } from "react";

function useSal() {
  useEffect(() => {
    window.sal({
      threshold: 0.1,
      once: true,
    });
  }, []);
}

export default useSal;

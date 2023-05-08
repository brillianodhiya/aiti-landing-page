import { useEffect } from "react";

function useCounterCaseStudy() {
  useEffect(() => {
    const _counter = window.$(".count");
    if (_counter.length) {
      _counter.counterUp({
        delay: 10,
        time: 1000,
        triggerOnce: true,
      });
    }
  }, []);
}

export default useCounterCaseStudy;

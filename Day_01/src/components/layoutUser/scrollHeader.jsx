// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const scrollHeader = () => {
  console.log(1);
  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [display, setDisplay] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener("scroll", function () {
        const y = window.scrollY;
        if (y >= 250) {
          setDisplay(true);
        } else {
          setDisplay(false);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return window.addEventListener("scroll", handleScroll);
  }, []);
};

export default scrollHeader;

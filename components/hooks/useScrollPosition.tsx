import React, { useState, useEffect } from "react";

const useScrollPosition = () => {
  if (typeof window === "undefined") return 500;

  // Store the state
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  // Add and remove the window listener
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};

export default useScrollPosition;

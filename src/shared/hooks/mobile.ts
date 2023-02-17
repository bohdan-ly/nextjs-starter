import { useDebounceCallback } from "@react-hook/debounce";
import React from "react";

export const useMediaLayout = () => {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  const debouncedSizeChange = useDebounceCallback(
    () => setWidth(window.innerWidth),
    1000
  );

  React.useEffect(() => {
    window.addEventListener("resize", debouncedSizeChange);
    return () => {
      window.removeEventListener("resize", debouncedSizeChange);
    };
  }, []);

  return width <= 768;
};

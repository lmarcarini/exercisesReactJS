import { useEffect, useState } from "react";

const useInfiniteScroll = (callback) => {
  const [onBottom, setOnBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (callback) callback();
        setOnBottom(true);
        return;
      }
      setOnBottom(false);
    };
    window.addEventListener("scroll", handleScroll);
    const handleWindowResize = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (callback) callback();
        setOnBottom(true);
        return;
      }
      setOnBottom(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { onBottom, setOnBottom };
};

export default useInfiniteScroll;

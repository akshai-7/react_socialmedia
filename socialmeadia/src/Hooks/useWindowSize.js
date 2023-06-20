import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowsize, SetWindowSize] = useState({
        width: undefined,
        height: undefined
    });
    useEffect(() => {
    const handleResize = () => {
        SetWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
       })
    }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () =>window.removeEventListener("resize", handleResize);
    }, [])
    return windowsize;
}

export default useWindowSize;

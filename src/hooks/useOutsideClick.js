import React, { useEffect, useRef } from "react";

// Reference: https://www.robinwieruch.de/react-hook-detect-click-outside-component/
export const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                console.log("test call callback");
                callback();
            }
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, [ref]);

    return ref;
};
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { ComponentNameContextProvider } from "./context";

const ComponentName = () => {
    const context = useMemo(
        () => ({
            /*Returns an object of all global states */
        }),
        [
            /*dependencies*/
        ]
    );
    return <ComponentNameContextProvider value={context}></ComponentNameContextProvider>;
};

ComponentName.propTypes = {};

export default ComponentName;

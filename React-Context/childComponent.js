import React from "react";
import PropTypes from "prop-types";
import { useComponentNameContext } from "../context";

const childComponent = () => {
    const {
        /** Destructure/has access to all */
    } = useComponentNameContext();

    return <div></div>;
};

childComponent.propTypes = {};

export default childComponent;

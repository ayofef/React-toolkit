import { createContext, useContext } from "react";

const ComponentNameContext = createContext({});
const ComponentNameContextProvider = FlowEditorContext.Provider;

/**
 * @typedef Context
 *
 * @property {data_type} [name_of_prop]
 * */

/**
 * @return {Context} context
 * */

const useComponentNameContext = () => useContext(ComponentNameContext);

export { ComponentNameContextProvider, useComponentNameContext };

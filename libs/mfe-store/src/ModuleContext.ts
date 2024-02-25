import React, { useContext } from "react"

export interface IModuleParam {
    moduleName: string
}

export const ModuleContext = React.createContext<IModuleParam>({
    moduleName: ''
});

export const useModule = () => useContext(ModuleContext).moduleName
import React, { useContext } from "react"

export interface IModule {
    moduleName: string
    remoteEntry: string // url
}

export interface IComponent<OtherInfo> {
    moduleName: string;
    name: string;
    exposedModule: string;
    info?: OtherInfo
}

export interface IMFEParams<T> {
    modules: IModule[]
    components: IComponent<T>[]
    definitionExposedModule: string
    registerComponent: (components: IComponent<T>) => void
    registerModule: (module: IModule) => void
    getComponentParamsByName: (name: string) => any
}

export const MFEContext = React.createContext<IMFEParams<any>>({
    modules: [],
    components: [],
    registerComponent: () => {},
    registerModule: () => {},
    definitionExposedModule: './definition',
    getComponentParamsByName: () => ({}) as any
});

export const useMFE = () => useContext(MFEContext)
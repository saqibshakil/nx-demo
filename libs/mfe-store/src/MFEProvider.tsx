import React, { useCallback, useState } from 'react'
import { IComponent, IModule, MFEContext } from "./MFEContext"

interface IOwnProps {
    children?: any
    definitionModule?: string
}

function MFEProvider<T>(props: IOwnProps) {
    const { children, definitionModule = './definition' } = props
    const [modules, setModules] = useState<IModule[]>([])
    const [components, setComponents] = useState<IComponent<T>[]>([])

    const registerComponent = useCallback((component: IComponent<T>) => { setComponents([...components, component]) }, [components])
    const registerModule = useCallback((module: IModule) => {
        setModules([...modules, module])
    }, [modules])

    const getComponentParamsByName = useCallback((name: string) => {
        const component = components.find(comp => comp.name === name)
        if (!component)
            throw Error("Component not Found")

        const { exposedModule, moduleName } = component

        const { remoteEntry } = modules.find(p => p.moduleName === moduleName) || {}

        return {
            exposedModule,
            remoteName: moduleName,
            remoteEntry
        }

    }, [components, modules])
    return (
        <MFEContext.Provider value={{ components, modules, registerComponent, registerModule, definitionExposedModule: definitionModule, getComponentParamsByName }}>
            {children}
        </MFEContext.Provider>
    )
}

export default MFEProvider

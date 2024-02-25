import React, { useEffect, useState } from 'react';
import { IModule, useMFE } from './MFEContext';
import { loadRemoteModule, setRemoteDefinitions } from './loadModule';
import { ModuleContext } from './ModuleContext';



const loadModule = async (setComponent: any, moduleName: string, remoteEntry: string, exposedModule: string) => {
    const definition: any = {}
    definition[moduleName] = remoteEntry
    await setRemoteDefinitions(definition)
    const Module = await loadRemoteModule(moduleName, exposedModule)

    setComponent(Module.default)
}

export default function RegisterMFE({ moduleName, remoteEntry }: IModule) {
    const { registerModule, definitionExposedModule } = useMFE()
    const [DefinitionComponent, setComponent] = useState<any>(undefined)
    useEffect(() => {
        (async () => {
            await loadModule(setComponent, moduleName, remoteEntry, definitionExposedModule)
            registerModule({ moduleName, remoteEntry })
        })()
    }, [])
    return <ModuleContext.Provider value={{ moduleName }}>
        {DefinitionComponent}
    </ModuleContext.Provider>
}


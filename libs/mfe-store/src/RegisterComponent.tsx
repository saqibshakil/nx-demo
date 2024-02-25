import React, { useEffect } from 'react';
import { IComponent, useMFE } from './MFEContext';
import { useModule } from './ModuleContext';

type Component<T> = Omit<IComponent<T>, "moduleName">

export default function RegisterComponent<T>(component: Component<T>) {
    const { registerComponent } = useMFE()
    const moduleName = useModule()

    useEffect(() => {
        registerComponent({
            ...component,
            moduleName
        })
    }, [])
    return <></>
}


import React, { ReactNode, useMemo } from 'react';

import { loadRemoteModule } from './loadModule';
import { useMFE } from './MFEContext';

interface IProps {
  name: string
  fallback?: ReactNode
  componentProps: {
    [propName: string]: any
  }

}


export default function Lazy(props: IProps) {
  const { name, fallback, componentProps } = props
  const { getComponentParamsByName } = useMFE()


  const Component = useMemo(() => React.lazy(async () => {
    try {
      const { exposedModule, remoteEntry } = getComponentParamsByName(name)
      const mod = await loadRemoteModule(name, exposedModule);
      return mod
    } catch (e) {
      return {
        default: ErrorComponent
      }
    }
  }), [getComponentParamsByName, name]);

  return (
    <React.Suspense fallback={fallback || 'Loading...'}>
      <Component {...componentProps} />
    </React.Suspense>
  );
}

function ErrorComponent() {
  return <>Component Not Found</>
}
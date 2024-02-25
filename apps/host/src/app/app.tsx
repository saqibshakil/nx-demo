import { MFEProvider, MicroFrontEndComponent, RegisterMFE } from '@react-module-federation/mfe-store';
import * as React from 'react';

// import { Link, Route, Routes } from 'react-router-dom';

const About = React.lazy(() => import('about/Module'));

// const Cart = React.lazy(() => import('cart/Module'));

// const Shop = React.lazy(() => import('shop/Module'));

export function App() {

  return (
    <MFEProvider>
      <RegisterMFE moduleName='about' remoteEntry='http://localhost:4201/' />
      <MicroFrontEndComponent name='about' componentProps={{}}/>
    </MFEProvider>

  );
}

export default React.memo(App);

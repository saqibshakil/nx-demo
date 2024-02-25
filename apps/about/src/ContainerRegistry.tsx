import { RegisterComponent } from '@react-module-federation/mfe-store';

export function App() {
  return (
    <RegisterComponent name="about" exposedModule="./Module"/>
  );
}

export default App;

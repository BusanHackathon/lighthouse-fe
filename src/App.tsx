import { ApplicationProviders } from './app/providers';
import { Routes } from './app/routes';

function App() {
  return (
    <ApplicationProviders>
      <Routes />
    </ApplicationProviders>
  );
}

export default App;

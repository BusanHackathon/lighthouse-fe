import { ApplicationProviders } from './app/providers';
import { Routes } from './app/routes';
import { ImagePreloader } from './shared';

function App() {
  return (
    <ApplicationProviders>
      <ImagePreloader />
      <Routes />
    </ApplicationProviders>
  );
}

export default App;

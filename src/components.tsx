import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import OctobellAppTheme from './config/theme.config.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={OctobellAppTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);

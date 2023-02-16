import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Header';
import theme from '../../theme';
import { Introduction } from './Introduction';
import { Links } from './Links';

export const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Introduction />
      <Links />
    </ChakraProvider>
  )
}

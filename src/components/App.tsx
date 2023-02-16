import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Header';
import theme from '../../theme';
import { AccordianSection } from './AccordianSection';
import { Links } from './Links';
import { Badges } from './Badges';

export const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Badges />
      <AccordianSection />
      <Links />
    </ChakraProvider>
  )
}

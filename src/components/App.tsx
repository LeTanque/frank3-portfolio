import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Header';

export const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS>
      <Header />
    </ChakraProvider>
  )
}

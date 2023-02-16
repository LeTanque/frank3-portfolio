import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Flex textAlign='left' flexDirection='column' mb='2rem'>
      <Heading size='4xl'>Frank3</Heading>
      <Heading size='2xl'>leTanque</Heading>
      <Heading size='xl'>Frank B</Heading>
    </Flex>
  )
}

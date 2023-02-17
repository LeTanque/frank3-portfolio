import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Flex textAlign='left' flexDirection='column' mb='2rem'>
      <Heading size='3xl'>Frank</Heading>
      <Heading size='3xl'>Martinez</Heading>
    </Flex>
  )
}

import { Flex, Box, Badge } from '@chakra-ui/react';
import React from 'react';

export const Badges: React.FC = () => {
  return (
    <Box width='full' display='flex' flexDirection='column' alignItems='center'>
      <Flex maxW='800px' mb='2rem' flexWrap='wrap' justify='center'>
        <Badge variant='solid' colorScheme='green' padding='1rem' margin='1rem 0.5rem 0rem 0.5rem' fontSize='1.6rem'>Software Engineer</Badge>
        <Badge variant='subtle' colorScheme='green' padding='1rem' margin='1rem 0.5rem 0rem 0.5rem' fontSize='1.6rem'>Frontend Specialist</Badge>
      </Flex>
      <Flex maxW='1000px' mb='2rem' flexWrap='wrap' justify='center'>
        <Badge variant='outline' colorScheme='cyan' margin='1rem 0.5rem 0rem 0.5rem' pr='0.7rem' pl='0.7rem' fontSize='1.4rem'>Founder Experience</Badge>
        <Badge variant='outline' colorScheme='cyan' margin='1rem 0.5rem 0rem 0.5rem' pr='0.7rem' pl='0.7rem' fontSize='1.4rem'>Grit</Badge>
        <Badge variant='outline' colorScheme='cyan' margin='1rem 0.5rem 0rem 0.5rem' pr='0.7rem' pl='0.7rem' fontSize='1.4rem'>Founding Engineer Experience</Badge>
        <Badge variant='outline' colorScheme='cyan' margin='1rem 0.5rem 0rem 0.5rem' pr='0.7rem' pl='0.7rem' fontSize='1.4rem'>Hyper-Growth Startup Experience</Badge>
      </Flex>
    </Box>
  )
}

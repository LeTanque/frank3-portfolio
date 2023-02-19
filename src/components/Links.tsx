import React from 'react';
import { Icon, ChatIcon } from '@chakra-ui/icons'
import { Box, Link, Tooltip } from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsCodeSquare } from 'react-icons/bs'

export const Links: React.FC = () => {
  return (
    <>
      <Box position='sticky' width='100%' bottom='0' height='12rem' />
      <Box width='100%' backgroundColor='chakra-body-bg' borderTop='1px solid white' display='flex' justifyContent='center' alignItems='center' position='fixed' bottom='0' pb='2rem' pt='2rem' ml='-1.6rem' >
        <Tooltip label='Book some time on my Calendly' fontSize='1.2rem'>
          <Link href='https://calendly.com/letanque/b' isExternal aria-keyshortcuts='tab'>
            <ChatIcon boxSize='3rem' ml='1rem' mr='1rem' aria-label='calendly' />
          </Link>
        </Tooltip>

        <Tooltip label='Github' fontSize='1.2rem'>
          <Box aria-keyshortcuts='tab'>
            <Link href='https://github.com/letanque' isExternal>
              <Icon as={BsGithub}  boxSize='3rem' ml='1rem' mr='1rem' aria-label='github'/>
            </Link>
          </Box>
        </Tooltip>
       
        <Tooltip label='Codesandbox' fontSize='1.2rem'>
          <Box aria-keyshortcuts='tab'>
            <Link href='https://codesandbox.io/u/LeTanque' isExternal>
              <Icon as={BsCodeSquare}  boxSize='3rem' ml='1rem' mr='1rem' aria-label='codesandbox'/>
            </Link>
          </Box>
        </Tooltip>

        <Tooltip label='LinkedIn' fontSize='1.2rem'>
          <Box aria-keyshortcuts='tab'>
            <Link href='https://linkedin.com/in/frankm3' isExternal >
              <Icon as={BsLinkedin}  boxSize='3rem' ml='1rem' mr='1rem' aria-label='linkedin'/>
            </Link>
        </Box>
        </Tooltip>
      </Box>
    </>
  )
}

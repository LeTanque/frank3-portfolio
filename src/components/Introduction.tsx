import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, type ThemeConfig } from '@chakra-ui/react';

export const Introduction: React.FC = () => {
  return (
    <Box mb='2rem'>
      <Box width='full' display='flex' justifyContent='center' mb='2rem'>
        <Badge variant='solid' colorScheme='green' padding='1rem' mr='1rem' fontSize='1.4rem'>Software Engineer - Frontend Specialist</Badge>
      </Box>
      <Box width='full' display='flex' justifyContent='center' mb='2rem'>
        <Badge variant='outline' colorScheme='cyan' mr='1rem' fontSize='1.4rem'>Hyper-Growth Startup Experience</Badge>
        <Badge variant='outline' colorScheme='cyan' mr='1rem' fontSize='1.4rem'>Founder Experience</Badge>
        <Badge variant='outline' colorScheme='cyan' mr='1rem' fontSize='1.4rem'>Founding Engineer Experience</Badge>
      </Box>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem'>
              Introduction
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontSize='2.8rem' fontWeight='bold'>
            I'm a software engineer living north of San Francisco. I have an 
            unconventional background that I have come to realize is one of my strengths. After 
            discovering bitcoin (at around $13/btc) and becoming an active trader, I founded a 
            cryptocurrency remittance startup. I attended Lambda in their Full-time Fullstack 
            Software Developer bootcamp and excelled. I worked for Lambda as a TL for short time. 
            I spent the last 2.5+ years as a founding engineer at Nearside, which was recently 
            acquired.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem'>
              Dollero
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontSize='2.8rem' fontWeight='bold'>
            <Box width='full' display='flex' justifyContent='left' mb='2rem' fontSize='2.8rem' fontWeight='bold'>
              I started Dollero because I saw no reason not to. I 
              was determined to leverage cryptocurrency technology to provide a remittance solution that 
              abstracted all of the technical details from the UX. 
              Behind the scenes it ran on the Ripple network of inbound, outbound, and liquidity 
              providers. 
            </Box>

            <Box width='full' display='flex' justifyContent='left' mb='2rem' fontSize='2.8rem' fontWeight='bold'>
              Graciously, Kliener Perkins took my under their wing and answered my very naive questions 
              about valuation, stock distribution, type of incorporation to form, and many more. I raised 
              money, hired engineers, and built a physical prototype that our beta partner locations could 
              install in their shops. As it turned out, large remittance providers were not too keen on 
              near zero-cost competition taking their customers away from them.
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem'>
              Backstory for the Curious
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontSize='2.8rem' fontWeight='bold'>
            Since I was a teenager, I have been infatuated with computers and the internet. I built
            my own PCs, maintained a page on Homestead, chatted on IRC, and hosted LAN parties to play
            Starcraft 2: Brood Wars. But my college counselor advised me to choose graphic design since 
            I was passionate about art and computers. Her logic was that there is very little ability to
            creatively express oneself in computer science. I took her advice and quickly realized I was
            on a path that didn't align with me. So I decided to forge my own path and dropped out.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

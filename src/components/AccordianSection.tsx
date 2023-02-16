import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Flex, type ThemeConfig } from '@chakra-ui/react';
import { Badges } from './Badges';

export const AccordianSection: React.FC = () => {
  return (
      <Flex mb='2rem' width='full' justifyContent='center' >
        <Accordion defaultIndex={[0]} allowMultiple maxW='1000px' width='full'>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='2rem'>
                Introduction
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} fontSize='2.8rem' fontWeight='bold'>
            <Box width='full' display='flex' justifyContent='left' mb='2rem' fontSize='2.8rem' fontWeight='bold'>
              I'm a software engineer living north of San Francisco. I have an 
              unconventional background that I have come to realize is one of my strengths. After
              discovering bitcoing relatively early and becoming an active trader, I quit my job
              and began to redefine myself. I founded a cryptocurrency remittance startup called Dollero. 
              I attended Lambda in their Full-time Fullstack Software Developer bootcamp and excelled. 
              I spent the last 2.5+ years as a founding engineer at Nearside, which was acquired. 
              During my time at Nearside, I wrote production code for new features 
              and greenfield products. I worked across most of our stack and specialized 
              in frontend engineering and integrations.
            </Box>
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
              <Box width='full' display='flex' justifyContent='left' mb='2rem' fontSize='2rem' fontWeight='bold'>
                I started Dollero because I saw no reason not to. I reinvented myself as someone who 
                was capable of making my dreams reality. I saw an opportunity to help disadvantaged 
                people support their families abroad. So I set out to leverage cryptocurrency technology 
                to provide a remittance solution that abstracted all of the technical details from the UX. 
                Behind the scenes it ran on the Ripple network of inbound, outbound, and liquidity 
                providers. 
              </Box>

              <Box width='full' display='flex' justifyContent='left' mb='2rem' fontSize='2rem' fontWeight='bold'>
                Graciously, Kliener Perkins took me under their wing and answered my very naive questions 
                about valuation, stock distribution, type of corporation to form, and many more. I raised 
                money, hired engineers, and built a physical prototype that our beta partner locations could 
                install in their shops. As it turned out, though, large remittance providers were not too keen on 
                near zero-cost remittance solutions taking their customers away from them. I chose perhaps the 
                hardest problem to solve in the crypto space; I just didn't realize the blockers were 
                economical and political more than technical.
              </Box>

              <Box width='full' display='flex' justifyContent='left' mb='2rem' fontSize='2rem' fontWeight='bold'>
                I've heard people say it's a badge of honor to have had a failed startup in Silicon Valley. 
                To that I say the startup isn't the point, it's the failure and what you do with that 
                experience. I am not afraid to say failure has been my greatest teacher.
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
            <AccordionPanel pb={4} fontSize='2.2rem' fontWeight='bold'>
              <Box width='full' display='flex' justifyContent='left' mb='2rem' fontSize='2rem' fontWeight='bold'>
                Since I was a teenager, I have been infatuated with computers and the internet. I built
                my own PCs, hosted LAN parties to play Starcraft 2: Brood Wars, and taught myself linux by 
                lurking in UNIX message boards. But my college counselor advised me to choose graphic design 
                since I was passionate about art. Her logic was that there is very little opportunity to 
                creatively express oneself in computer science. I took her advice and soon realized I 
                was on a path that didn't align with me. So I decided to wander into the unknown and dropped out.
              </Box>
              
              <Box width='full' display='flex' justifyContent='left' mb='2rem' fontSize='2rem' fontWeight='bold'>
                Eventually, I learned that all skills honed with focus and passion can be forms of creative expression, 
                including computer science. Taking an idea and making it real through hardware, software,
                and creativity has become my preferred form of art. My college advisor couldn't 
                have known that. 
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>

  )
}

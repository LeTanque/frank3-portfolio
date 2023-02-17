import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const AccordianSection: React.FC = () => {
  return (
    <Flex mb='2rem' width='full' justifyContent='center' >
      <Accordion defaultIndex={[0]} allowMultiple maxW='1000px' width='full' lineHeight='1.2'>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem' fontWeight='black' color='GrayText'>
              Introduction
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box width='full' mb='2rem' fontSize='2.8rem' fontWeight='bold'>
              I'm a software engineer living north of San Francisco. An early bitcoin adopter and 
              former active trader. Founder of a cryptocurrency remittance startup called Dollero. Lambda 
              Full-time Fullstack Software Developer graduate. One of the founding engineers at Nearside, 
              where I spent the last 2.5+ years writing production code for new features, developing 
              greenfield products, creating processes, documenting standards as we created them and 
              working across most of the stack. Specialist in frontend engineering and integrations.
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem' fontWeight='black' color='GrayText'>
              Highlights
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              <Box fontWeight='bold' fontSize='2.4rem'>Nearside</Box>
              <li>
                One of the founding engineers at Nearside which raised $75 million and grew to 100+ employees. 
              </li>
              <li>
                Wrote customer facing production code with a 99% uptime committment, which was upheld.
              </li>
              <li>
                Designed an incident management system inspired by CalFire and utilized Alma for Slack communication.
              </li>
              <li>
                Increased funded Business Bank Accounts by 2.5x in 3 months by optimizing the application funnel.
              </li>
              <li>
                3 month contract-to-hire, offered full-time in 1 month, promoted 3 times to Software Engineer L2.
              </li>
              <li>
                Owned <i>Halo</i>, a secure internal management dashboard that processed thousands of customers 
                automatically and manually, used by 5 teams all with unique feature requirements.
              </li>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem' fontWeight='black' color='GrayText'>
              Dollero
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              After some success in the crypto space, I wanted to build something that would make a 
              positive impact in the world. 
              The opportunity to help people support their families abroad while working 
              in the US, a transaction known as&nbsp;
              <Link href='https://www.migrationdataportal.org/themes/remittances#key-trends' isExternal>remittance
              <Icon boxSize='1.8rem' ml='0.5rem' mb='0.3rem'><ExternalLinkIcon /></Icon></Link>, seemed obvious to me. 
              Depending on how it's measured, the global remittance space is a several billion to trillion+ dollar market. 
              The cost to customer of remittance varies depending on corridor, but a rough range is 10% - 40% per transaction. 
              Crypto can reduce the cost of remittances dramatically; it's one of the strongest use cases, IMHO. 
              The goal with Dollero was to provide a remittance solution that abstracted all of the technical details from the UX and
              passed a bulk of the savings onto the customer. Behind the scenes it ran on Ripple's platform of 
              inbound, outbound, and liquidity providers. 
            </Box>

            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              Graciously, Kliener Perkins took me under their wing and answered my very naive questions 
              about valuation, stock distribution, type of corporation to form, and many more. I raised 
              money, hired engineers, and built a physical prototype that our beta partner locations could 
              install in their shops. As it turned out, though, large remittance providers were not too keen on 
              near zero-cost remittance solutions taking their customers away from them. I chose perhaps the 
              hardest problem to solve in the crypto space; I just didn't realize the blockers were 
              economical and political more than technical.
            </Box>

            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              I've heard people say it's a badge of honor to have had a failed startup in Silicon Valley. 
              To that I say the startup isn't the point, it's the failure and what you do with that 
              experience. I am not afraid to say failure has been my greatest teacher.
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem' fontWeight='black' color='GrayText'>
              Ikigai
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontSize='2.2rem'>
            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              From Wikipedia, <Link href='https://en.wikipedia.org/wiki/Ikigai' isExternal>Ikigai 
              <Icon boxSize='1.8rem' ml='0.5rem' mb='0.3rem'><ExternalLinkIcon /></Icon></Link>&nbsp;
              (生き甲斐, lit. 'a reason for being') is a Japanese concept referring to something that 
              gives a person a sense of purpose, a reason for living.
            </Box>

            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              I feel blessed to have discovered my ikigai: software engineering.
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem' fontWeight='black' color='GrayText'>
              Values
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontSize='2.2rem'>
            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              <li>Trust</li>
              <li>Ownership</li>
              <li>Communication</li>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize='2rem' fontWeight='black' color='GrayText'>
              Backstory for the Curious
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontSize='2.2rem'>
            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              My background is unconventional and I used to see it as a weakness. But sometime around
              2016, I realized my background is one of my strengths. I see the world from my own unique  
              lens and am capable of articulating technical topics to most people in a non-condescending, 
              easy to understand, and often relatable way.
            </Box>
          
            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              Since I was a teenager, I have been infatuated with computers and the internet. I built
              my own PCs, hosted LAN parties to play Starcraft 2: Brood Wars, and taught myself linux through 
              the open-source community and lurking in UNIX message boards. But my college counselor advised 
              me to choose graphic design since I was passionate about art. Her logic was that there were very 
              few opportunities to creatively express oneself in computer science. I took her advice and soon 
              realized I was on a path that didn't align with me. So I decided to wander into 
              the unknown, dropped out of college, and embarked on a journey of my own design.
            </Box>
            
            <Box width='full' mb='2rem' fontSize='2rem' fontWeight='medium'>
              Eventually, I learned that all skills honed with focus and passion can be forms of creative expression, 
              including computer science. Taking an idea and making it real through hardware, software,
              and creativity is now my preferred form of artistic expression.
            </Box>
          </AccordionPanel>
        </AccordionItem>

        
      </Accordion>
    </Flex>
  )
}

import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const AccordianSection: React.FC = () => {
  return (
    <Flex mb="2rem" w="full" justifyContent="center">
      <Accordion defaultIndex={[0]} allowToggle maxW="1000px" w="full" lineHeight="1.2">
        <AccordionItem fontSize={{ base: '2.1rem', md: '2.3rem', lg: '2.5rem' }}>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
              fontWeight="black"
              color="GrayText"
            >
              Introduction
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontWeight="bold">
            <Box mb="2rem">
              I'm a software engineer who lives north of San Francisco. Founder of Dollero, a
              cryptocurrency remittance startup. Lambda School Fullstack Software Developer
              graduate. Part of the founding team of engineers at Nearside, where I spent the last
              2.5+ years writing production code for new features, developing greenfield products,
              creating processes, documenting standards as we created them, releasing frontend and
              backend features.
            </Box>
            <Box mb="2rem">
              Artist, endurance racing enthusiast, menacing Magic the Gathering player, and
              competitive Call of Duty team member.
            </Box>
            <Box mb="2rem">I'm Frank, thanks for visiting!</Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
              fontWeight="black"
              color="GrayText"
            >
              Values
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontWeight="medium">
            <Box mb="2rem" display="flex" justifyContent="center" flexWrap="wrap">
              <Badge
                variant="solid"
                colorScheme="linkedin"
                margin="1rem 0.5rem 0rem 0.5rem"
                pr="0.7rem"
                pl="0.7rem"
                pt="0.5rem"
                pb="0.5rem"
                fontSize={{ base: '1rem', md: '1.3rem', lg: '1.6rem' }}
              >
                It takes a village
              </Badge>
              <Badge
                variant="solid"
                colorScheme="facebook"
                margin="1rem 0.5rem 0rem 0.5rem"
                pr="0.7rem"
                pl="0.7rem"
                pt="0.5rem"
                pb="0.5rem"
                fontSize={{ base: '1rem', md: '1.3rem', lg: '1.6rem' }}
              >
                Take ownership of your commitments
              </Badge>
              <Badge
                variant="solid"
                colorScheme="messenger"
                margin="1rem 0.5rem 0rem 0.5rem"
                pr="0.7rem"
                pl="0.7rem"
                pt="0.5rem"
                pb="0.5rem"
                fontSize={{ base: '1rem', md: '1.3rem', lg: '1.6rem' }}
              >
                Over communication {'>'} under communication
              </Badge>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
              fontWeight="black"
              color="GrayText"
            >
              Nearside
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box
              mb="2rem"
              fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
              fontWeight="medium"
            >
              <li>
                Part of the founding team at Nearside where I helped find product market fit for
                thousands of users.
              </li>
              <li>
                3 month contract-to-hire, offered full-time in 1 month, promoted 3 times to Software
                Engineer L2.
              </li>
              <li>
                Regularly reviewed and wrote customer facing production code with a 99% uptime
                committment.
              </li>
              <li>
                Co-designed our incident response system that leveraged Alma, PagerDuty, Sentry, and
                DataDog.
              </li>
              <li>
                Increased funded Business Bank Accounts by 2.5x in 3 months by optimizing the
                application funnel.
              </li>
              <li>
                Owned <i>Halo</i>, a secure internal management dashboard that processed thousands
                of customers automatically and manually, used by 5 teams all with unique feature
                requirements.
              </li>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
              fontWeight="black"
              color="GrayText"
            >
              Dollero Mission
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            pb={4}
            fontWeight="medium"
            fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
          >
            <Box mb="2rem">
              After some success in the crypto space, I wanted to build something that would make a
              positive impact in the world. The opportunity to help people support their families
              abroad while working in the US, a transaction known as&nbsp;
              <Link
                href="https://www.migrationdataportal.org/themes/remittances#key-trends"
                isExternal
              >
                remittance
                <Icon boxSize="1.8rem" ml="0.5rem" mb="0.3rem">
                  <ExternalLinkIcon />
                </Icon>
              </Link>
              , seemed obvious to me. Depending on how it's measured, the global remittance space is
              a several billion to trillion+ dollar market. The cost to customer of remittance
              varies depending on corridor, but a rough range is 10% - 40% per transaction.
            </Box>

            <Box mb="2rem">
              Using a decentralized currency that runs through the internet and not through several
              layers of banks for remittance is one of the strongest use cases for cryptocurrency,
              IMHO. Customers win, the providers win, but the traditional banking industry could
              potentially lose one it's oldest cash cows.
            </Box>

            <Box mb="2rem">
              Dollero's mission was to provide a remittance solution that abstracted all of the
              technical details from the UX and passed a bulk of the savings onto the customer.
              Behind the scenes it ran on Ripple's platform of inbound gateways, outbound gateways,
              and liquidity providers.
            </Box>

            <Box mb="2rem">
              Graciously, Kliener Perkins took me under their wing and answered my very naive
              questions about valuation, stock distribution, type of corporation to form, and many
              more. I raised money, hired engineers, and built a physical prototype that our beta
              partner locations could install in their shops.
            </Box>

            <Box mb="2rem">
              Reflecting on the experience, I chose perhaps the hardest problem to solve in the
              crypto space. The blockers were economical and political more than technical. I've
              heard that it's a badge of honor to have had a failed startup in Silicon Valley. To
              that I say: failure is a wise teacher.
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
              fontWeight="black"
              color="GrayText"
            >
              Ikigai Philosophy
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            pb={4}
            fontWeight="medium"
            fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
          >
            <Box mb="2rem">
              From Wikipedia,{' '}
              <Link href="https://en.wikipedia.org/wiki/Ikigai" isExternal>
                Ikigai
                <Icon boxSize="1.8rem" ml="0.5rem" mb="0.3rem">
                  <ExternalLinkIcon />
                </Icon>
              </Link>
              &nbsp; (生き甲斐, lit. 'a reason for being') is a Japanese concept referring to
              something that gives a person a sense of purpose, a reason for living.
            </Box>

            <Box mb="2rem">
              I feel blessed to have discovered my ikigai in software engineering.
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
              fontWeight="black"
              color="GrayText"
            >
              Weapons of Choice
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontWeight="medium">
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              <Badge
                variant="solid"
                colorScheme="green"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                React / Next.js
              </Badge>
              <Badge
                variant="solid"
                colorScheme="green"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                Sass
              </Badge>
              <Badge
                variant="solid"
                colorScheme="green"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                Tailwind & Headless UI
              </Badge>
              <Badge
                variant="solid"
                colorScheme="green"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                Chakra / AntD
              </Badge>
            </Box>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              <Badge
                variant="solid"
                colorScheme="purple"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                Node.js / Express
              </Badge>
              <Badge
                variant="solid"
                colorScheme="purple"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                PostgreSQL / SQL / SQLite
              </Badge>
            </Box>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              <Badge
                variant="subtle"
                colorScheme="orange"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                Flutter / Dart
              </Badge>
              <Badge
                variant="subtle"
                colorScheme="orange"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                Python
              </Badge>
              <Badge
                variant="subtle"
                colorScheme="orange"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.5rem"
                pr="0.5rem"
                pb="0.3rem"
                pt="0.3rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                Kotlin
              </Badge>
            </Box>
            <Box mb="2rem" display="flex" justifyContent="center" flexWrap="wrap">
              <Badge
                variant="solid"
                colorScheme="pink"
                margin="1rem 0.5rem 0rem 0.5rem"
                pl="0.7rem"
                pr="0.7rem"
                pb="0.5rem"
                pt="0.5rem"
                fontSize={{ base: '1.2rem', md: '1.3rem', lg: '1.4rem' }}
              >
                Whatever it takes to ship
              </Badge>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
              fontWeight="black"
              color="GrayText"
            >
              Backstory for the Curious
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            pb={4}
            fontWeight="medium"
            fontSize={{ base: '1.5rem', md: '1.75rem', lg: '2rem' }}
          >
            <Box mb="2rem">
              As a child, I saw myself as an artist. When my Grandfather bought me a computer in my
              teens, I became infatuated with the early internet. Soon I would build my own PCs,
              host LAN parties to play Starcraft II: Brood Wars, and teach myself linux through the
              open-source community and lurking in UNIX message boards. My first job was an
              internship at Sun Microsystems (thanks to my Dad and two teachers with whom I was the
              unofficial IT specialist for), which I loved.
            </Box>

            <Box mb="2rem">
              In college, I wanted to major in Computer Art. My counselor informed me that Computer
              Art wasn't an offered degree and it would be risky to define my own degree. She
              advised me to choose Graphic Design since I was passionate about art and SJSU had a
              great Graphic Design program. Her logic was that there would be very few opportunities
              to express myself creatively in Computer Science. I took her advice but soon realized
              I was on a path that didn't align with me. So I decided to wander into the unknown and
              dropped out of college. I embarked on a journey of my own design.
            </Box>

            <Box mb="2rem">
              Several years later, I discovered bitcoin and traded over 500 btc on localbitcoins,
              MtGox, and other platforms. I capitalize on global abritrage opportunities. I read
              books on investing, on day trading, dove deep into how bitcoin worked, and made myself
              an "expert" on the subject. A Stanford VLAB member discovered me and after chatting
              over coffee, invited me to speak to faculty and students at Stanford about blockchain
              technologies. It changed my life to be among so many smart people who asked very smart
              questions. I was invited to co-chair a panel discussion called&nbsp;
              <Link href="https://www.youtube.com/watch?v=22Cr_CD2lJw" isExternal>
                Virtual Currencies: Gold Rush or Fools' Gold, The Rise of Bitcoin in a Digital
                Economy (youtube link)
                <Icon boxSize="1.8rem" ml="0.5rem" mb="0.3rem">
                  <ExternalLinkIcon />
                </Icon>
              </Link>
              , which I happily did.
            </Box>

            <Box mb="2rem">
              VLAB, for me, was validation that I could pursue whatever I put my mind to. I saught
              knowledge, took action, and found a group of people that I highly respected for their
              humility and intellect. I found people that I could be my nerdy self with, finally!
            </Box>

            <Box mb="2rem">
              My background is unconventional and I used to see it as a weakness. But, sometime
              around 2016, I realized my background is one of my strengths. I am an artist. My
              canvas is the world around us. My mediums are languages and timeless patterns deployed
              through a CI tunnel to a target cloud. My work doesn't hang in a museum or gallery, it
              sits in your pocket or is viewed on your laptop. I write for humans because I am one.
              I lean towards maximum readability because engineering, like art, is bound to be
              iterated upon. Writing software is a team activity like a mural painted with friends.
            </Box>

            <Box mb="2rem">
              Today, I believe that all skills honed with focus and passion can be forms of creative
              expression, including computer science and software engineering. Taking an idea and
              making it real, through whatever means, is my preferred form of artistic expression.
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

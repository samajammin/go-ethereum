import { Box, Grid, GridItem, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import {
  HomeHero,
  HomeSection,
  QuickLinks,
  WhatIsEthereum,
  WhyRunANode
} from '../components/UI/homepage';
import { PageMetadata } from '../components/UI';
import { GopherHomeFront, GopherHomeLinks } from '../components/UI/svgs';

import {
  CONTRIBUTING_PAGE,
  DOCS_PAGE,
  ETHEREUM_FOUNDATION_URL,
  ETHEREUM_ORG_URL,
  GETH_REPO_URL,
  GO_URL,
  METADATA
} from '../constants';

const HomePage: NextPage = ({}) => {
  return (
    <>
      <PageMetadata title={METADATA.HOME_TITLE} description={METADATA.HOME_DESCRIPTION} />

      <main id='main-content'>
        <Stack spacing={{ base: 4, lg: 8 }}>
          <HomeHero />

          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={{ base: 4, lg: 8 }}
          >
            <GridItem rowSpan={2}>
              {/* SECTION: What is Geth */}
              <HomeSection
                sectionTitle='What is QFI?'
                linkLabel='Get started with QFI'
                buttonHref={`${DOCS_PAGE}/getting-started`}
                Svg={GopherHomeFront}
                ariaLabel='Gopher greeting'
              >
                <Text textStyle='quick-link-text'>
                  Our team works on privacy technology that leverages Ethereum smart contracts and
                  ZKPs to empower radical democracy. We’re working to create a scalable way to
                  support Quadratic Funding projects, by building infrastructure that enables
                  community organizers to run Quadratic Funding Rounds.
                </Text>

                <Text textStyle='quick-link-text'>
                  We offer help in planning, operations, technical guidance, marketing, and impact
                  analysis with a the goal of empowering organizers to become technically
                  independent and ready to receive matching funds/grants. We want to activate more
                  operators that will continue to run QF rounds for their communities.
                </Text>
              </HomeSection>
            </GridItem>

            <GridItem>
              {/* SECTION: What is Ethereum (has different styles than the other sections so it uses a different component) */}
              <WhatIsEthereum>
                <Text textStyle='quick-link-text'>
                  Ethereum is a technology for building apps and organizations, holding assets,
                  transacting and communicating without being controlled by a central authority. It
                  is the base of a new, decentralized internet.
                </Text>
              </WhatIsEthereum>
            </GridItem>

            <GridItem>
              {/* SECTION: Why run a node (has different styles than the other sections so it uses a different component) */}
              <WhyRunANode>
                <Text textStyle='quick-link-text'>
                  Running a round allows you to empower your community in a self-sufficient and
                  trustless manner. TODO...
                </Text>

                <Text textStyle='quick-link-text' fontWeight={700}>
                  &ldquo;Don&apos;t trust, verify&rdquo;
                </Text>
              </WhyRunANode>
            </GridItem>
          </Grid>

          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={{ base: 4, lg: 8 }}
          >
            <GridItem>
              {/* SECTION: Contribute to Geth */}
              <HomeSection
                sectionTitle='Contribute to QFI'
                linkLabel='Read our contribution guidelines'
                buttonHref={CONTRIBUTING_PAGE}
              >
                <Text textStyle='quick-link-text'>
                  We welcome contributions from anyone on the internet, and are grateful for even
                  the smallest of fixes! If you&apos;d like to contribute to the Geth source code,
                  please fork the{' '}
                  <Link href={GETH_REPO_URL} isExternal variant='light'>
                    GitHub repository
                  </Link>
                  , fix, commit and send a pull request for the maintainers to review and merge into
                  the main code base.
                </Text>
              </HomeSection>
            </GridItem>

            <GridItem>
              {/* SECTION: About the Team */}
              <HomeSection
                sectionTitle='About the Team'
                linkLabel='Read more about the Ethereum Foundation'
                buttonHref={ETHEREUM_FOUNDATION_URL}
              >
                <Text textStyle='quick-link-text'>
                  The QFI team is a small team of engineers, designers, and operators distributed
                  across the world. The QFI team is funded exclusively by The Ethereum Foundation.
                </Text>
              </HomeSection>
            </GridItem>
          </Grid>

          <Grid templateColumns={{ base: '1fr', md: '300px 1fr' }} gap={{ base: 4, lg: 8 }}>
            <GridItem w='auto'>
              <Box h='100%'>
                {/* TODO: replace with animated/video version */}
                <Stack
                  justifyContent='center'
                  alignItems='center'
                  p={4}
                  border='2px solid'
                  borderColor='primary'
                  h='100%'
                >
                  <GopherHomeLinks />
                </Stack>
              </Box>
            </GridItem>

            <GridItem>
              <QuickLinks />
            </GridItem>
          </Grid>
        </Stack>
      </main>
    </>
  );
};

export default HomePage;

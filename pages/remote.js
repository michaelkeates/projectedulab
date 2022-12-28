import React, { useRef, useState } from 'react';
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  Divider,
  Badge
} from '@chakra-ui/react'
import {
  ChevronRightIcon,
  InfoIcon,
  StarIcon,
  ViewIcon
} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { DoubleGridItem, WorkGridItem } from '../components/grid-item'
import NextLink from 'next/link'

import test from '../public/images/computer.png'
import quiz from '../public/images/ubuntu.png'


const Remote = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="pink.400"
        css={{ backdropFilter: 'blur(10px)' }}
        padding="15px;"
        textColor="white"
      >
        Hi! Welcome to the Remote section! To get started click a button below.
      </Box>

      <Section delay={0.1}>
        <Divider my={6} />
        <SimpleGrid columns={[2, 2, 2]} gap={2}>
          <Box
            borderRadius="lg"
            mb={6}
            p={12}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            shadow="lg"
          >
            <WorkGridItem id="uswapplied" thumbnail={quiz} title="Ubuntu">
                Log into your Ubuntu PC
            </WorkGridItem>
            <NextLink href="/remote/novnc" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="green"
                width="100%"
                textColor="white"
              >
                VNC
              </Button>
            </NextLink>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Remote
export { getServerSideProps } from '../components/chakra'

import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoFacebook } from 'react-icons/io5'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        //bg={active ? 'grassTeal' : undefined}
        //bg={active ? useColorModeValue('whiteAlpha.400', 'whiteAlpha.200') : undefined}
        color={active ? '#a6bbce' : active}
        target={target}
        //borderRadius="full"
        fontSize="13"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      //bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={999}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/login" path={path}>
            Login
          </LinkItem>
          <LinkItem href="/signup" path={path}>
            Signup
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                _focus={{ boxShadow: 'none' }}
              />
              <MenuList css={{ backdropFilter: 'blur(10px)' }}>
                <NextLink href="/login" passHref>
                  <MenuItem
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    _hover={{
                      bg: useColorModeValue('whiteAlpha.600', 'whiteAlpha.300')
                    }}
                    _focus={{ boxShadow: 'none' }}
                    as={Link}
                  >
                    Login
                  </MenuItem>
                </NextLink>
                <NextLink href="/signup" passHref>
                  <MenuItem
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    _hover={{
                      bg: useColorModeValue('whiteAlpha.600', 'whiteAlpha.300')
                    }}
                    _focus={{ boxShadow: 'none' }}
                    as={Link}
                  >
                    Signup
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar

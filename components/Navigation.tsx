// react
import { useState, useEffect } from 'react';

// next-auth
import { signIn, useSession } from 'next-auth/client';

// styling
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  WrapItem,
  Avatar,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// utils
import { generateValidPath } from '@/utils/url';

// interfaces
import ICategory from '../shared/ICategory';

// components
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: NavItem[];
  href?: string;
}

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [session, loading] = useSession();
  const [navItems, setNavItems] = useState<NavItem[]>([
    {
      label: 'Shuffle',
      href: '/',
    },
    {
      label: 'Trending',
      href: '/trending',
    },
    {
      label: 'Fresh',
      href: '/fresh',
    },
    {
      label: 'Categories',
      children: [],
    },
  ]);

  useEffect(() => {
    async function getAvailableCategories() {
      fetch('/api/categories')
        .then((response) => response.json())
        .then((data) => {
          navItems[3].children = data.categories.map((item: ICategory) => ({
            label: item.name,
            href: generateValidPath('categories', item.name),
          }));
          setNavItems([...navItems]);
        });
    }

    getAvailableCategories();
  }, []);

  function renderRightSide() {
    if (loading) {
      return <Text>Loading...</Text>;
    }

    if (session) {
      const { user } = session;

      return (
        <WrapItem alignItems='center'>
          <Text>{user.name.replace(' ', '')}</Text>
          <Avatar marginLeft={4} size='sm' name={user.name} src={user.image} />
        </WrapItem>
      );
    }

    return (
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'pink.400'}
        href={'#'}
        _hover={{
          bg: 'pink.300',
        }}
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    );
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            loutl
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          {renderRightSide()}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
}

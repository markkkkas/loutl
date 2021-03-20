// react
import { ReactNode } from 'react';

// styling
import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// components
import NavLink from './NavLink';
import UserDropdown from '../UserDropdown';

import routes from '@/constants/routes';

interface INavigation {
  children: ReactNode;
}

export default function Navigation({ children }: INavigation) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Object.keys(routes.navigation).map((route, index) => (
                <NavLink key={index} href={routes.navigation[route].href}>
                  {routes.navigation[route].name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <UserDropdown />
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Object.keys(routes.navigation).map((route, index) => (
                <NavLink key={index} href={routes.navigation[route].href}>
                  {routes.navigation[route].name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
}

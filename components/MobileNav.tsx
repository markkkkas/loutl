import { Stack, useColorModeValue } from '@chakra-ui/react';

// interfaces
import { NavItem } from './Navigation';

// components
import MobileNavItem from './MobileNavItem';

interface IMobileNav {
  navItems: NavItem[];
}

export default function MobileNav({ navItems }: IMobileNav) {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

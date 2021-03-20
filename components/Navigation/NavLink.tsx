// react
import { ReactNode } from 'react';

// next
import NextLink from 'next/link';

// chakra
import { Link, useColorModeValue } from '@chakra-ui/react';

interface INavLink {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: INavLink) {
  return (
    <NextLink href={href}>
      <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
}

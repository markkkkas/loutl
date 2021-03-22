// react
import { useState } from 'react';

// next
import NextLink from 'next/link';

// next-auth
import { useSession, signIn, signOut } from 'next-auth/client';

// chakra
import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  SkeletonCircle,
  Skeleton,
  MenuList,
  MenuItem,
  AvatarBadge,
  MenuDivider,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

// react-icons
import { FaGithubAlt } from 'react-icons/fa';

import routes from '@/constants/routes';

export default function UserDropdown() {
  const [session, loading] = useSession();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { user } = routes;

  if (loading) {
    return (
      <Flex alignItems='center'>
        <Skeleton w='110px' h='32px' mr={4} />
        <SkeletonCircle size='32px' />
      </Flex>
    );
  }

  if (!session) {
    return (
      <Flex alignItems='center'>
        <Button
          isLoading={buttonLoading}
          loadingText='Signing in...'
          variant='solid'
          colorScheme='blackAlpha'
          rightIcon={<FaGithubAlt />}
          onClick={() => {
            setButtonLoading(true);
            signIn('github');
          }}
        >
          Sign in with GitHub
        </Button>
      </Flex>
    );
  }

  return (
    <Flex alignItems='center'>
      <Button variant='solid' colorScheme='teal' size='sm' mr={4} leftIcon={<AddIcon />}>
        New loutl
      </Button>
      <Menu>
        <MenuButton as={Button} rounded='full' variant='link' cursor='pointer'>
          <Avatar size='sm' src={session.user.image}>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        </MenuButton>
        <MenuList>
          <NextLink href={user.profile.href}>
            <MenuItem>Profile</MenuItem>
          </NextLink>
          <NextLink href={user.loutls.href}>
            <MenuItem>Loutls</MenuItem>
          </NextLink>
          <MenuDivider />
          <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

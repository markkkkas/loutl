// next-auth
import { Session } from 'next-auth';
import { signOut } from 'next-auth/client';

// chakra
import {
  WrapItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  MenuDivider,
  Skeleton,
  Link,
  SkeletonCircle,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface IUserMenu {
  session: Session;
  loading: boolean;
}

export default function UserMenu({ session, loading }: IUserMenu) {
  function renderMenu() {
    return loading ? (
      <Skeleton height='20px' />
    ) : (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {session.user.name}
        </MenuButton>
        <MenuList>
          <Link style={{ textDecoration: 'none' }} href='/user/loutls'>
            <MenuItem>My loutls</MenuItem>
          </Link>
          <Link style={{ textDecoration: 'none' }} href='/user/profile'>
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuDivider />
          <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    );
  }

  function renderAvatar() {
    return loading ? (
      <SkeletonCircle marginLeft={4} size='9' />
    ) : (
      <Avatar marginLeft={4} size='sm' name={session.user.name} src={session.user.image} />
    );
  }

  return (
    <WrapItem alignItems='center'>
      {renderMenu()}
      {renderAvatar()}
    </WrapItem>
  );
}

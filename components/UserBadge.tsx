// chakra
import { Flex, Avatar, Box, Text, Badge } from '@chakra-ui/react';

interface IUserBadge {
  avatar: string;
  name: string;
  loutls: number;
}

export default function UserBadge({ avatar, name, loutls }: IUserBadge) {
  return (
    <Flex>
      <Avatar src={avatar} />
      <Box ml='3'>
        <Text fontWeight='bold'>{name}</Text>
        <Text fontSize='sm'>Total loutls: {loutls}</Text>
      </Box>
    </Flex>
  );
}

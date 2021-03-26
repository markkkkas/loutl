// swr
import useSWR from 'swr';

// chakra
import { GridItem, Skeleton, SkeletonCircle, Box, HStack, Text } from '@chakra-ui/react';
import UserBadge from './UserBadge';

import fetcher from 'fetcher';

interface IUser {
  image: string;
  name: string;
}

export default function TopFiveUsers() {
  const { data, error } = useSWR('/api/users/top?count=5&by=loutls', fetcher);

  if (error) return <Text align='center'>Error while fetching data...</Text>;
  if (!data) {
    return (
      <>
        {[0, 0, 0, 0, 0].map((_, index) => (
          <GridItem key={index}>
            <HStack spacing={4}>
              <SkeletonCircle size='48px' />
              <Box flexDir='column' w='50%'>
                <Skeleton w='100%' h='3' mb={3} />
                <Skeleton w='100%' h='3' />
              </Box>
            </HStack>
          </GridItem>
        ))}
      </>
    );
  }

  return (
    <>
      {data.users.map((item: IUser, index: number) => (
        <GridItem key={index}>
          <UserBadge avatar={item.image} name={item.name} loutls={1} />
        </GridItem>
      ))}
    </>
  );
}

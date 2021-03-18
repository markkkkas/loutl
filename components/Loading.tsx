// chakra
import { Box, Text } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box minH='100vh' display='flex' justifyContent='center' alignItems='center'>
      <Text fontSize='6xl'>Loading...</Text>
    </Box>
  );
}

// chakra
import { GridItem, Box, Text, Image, Flex, Avatar, Badge } from '@chakra-ui/react';

export default function Loutl() {
  return (
    <GridItem>
      <Box boxShadow='sm' p='6' rounded='md'>
        <Flex justify='space-between'>
          <Flex>
            <Avatar src='https://avatars.githubusercontent.com/u/48568793?v=4' />
            <Box ml='3'>
              <Text fontWeight='bold'>Markas Klapovščiuk</Text>
              <Text fontSize='sm'>clap for you clap for me</Text>
            </Box>
          </Flex>
          <Text fontSize={14} color='gray.400'>
            Posted on 2021-03-22 21:20
          </Text>
        </Flex>
        <Box w='100%' display='flex' justifyContent='center'>
          <Image src='https://media3.giphy.com/media/oz58vsbaeWXHwJhcSM/giphy.gif?cid=ecf05e47ea82a766156a47f09d4021177bf831983a264768&rid=giphy.gif&ct=g' />
        </Box>
      </Box>
    </GridItem>
  );
}

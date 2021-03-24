// react
import { useState } from 'react';

// chakra
import { GridItem, Box, Text, Image, Flex, Avatar } from '@chakra-ui/react';

// icons
import { BiUpvote, BiDownvote } from 'react-icons/bi';

type VoteType = 'up' | 'down' | undefined;

interface VoteStats {
  up: number;
  down: number;
}

export default function Loutl() {
  const [voteState, setVoteState] = useState<VoteType>(undefined);
  const [voteStats, setVoteStats] = useState<VoteStats>({ up: 0, down: 0 });

  function handleVoteClick(type: VoteType) {
    if (type !== voteState) {
      setVoteState(type);

      switch (type) {
        case 'up':
          if (voteStats.down != 0) {
            voteStats.up += 1;
            voteStats.down -= 1;
          } else voteStats.up += 1;
          break;
        case 'down':
          if (voteStats.up != 0) {
            voteStats.up -= 1;
            voteStats.down += 1;
          } else voteStats.down += 1;
          break;
        default:
          return;
      }

      setVoteStats({ ...voteStats });
    }
  }

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
        <Flex w='100%' justify='center' mt={4}>
          <Flex alignItems='center' mr={5}>
            <BiUpvote
              style={{ cursor: 'pointer' }}
              size='20px'
              color={voteState == 'up' ? 'green' : 'black'}
              onClick={() => handleVoteClick('up')}
            />
            ({voteStats.up})
          </Flex>
          <Flex alignItems='center'>
            <BiDownvote
              style={{ cursor: 'pointer' }}
              size='20px'
              color={voteState == 'down' ? 'red' : 'black'}
              onClick={() => handleVoteClick('down')}
            />
            ({voteStats.down})
          </Flex>
        </Flex>
      </Box>
    </GridItem>
  );
}

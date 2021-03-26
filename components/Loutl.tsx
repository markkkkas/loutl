// react
import { useState } from 'react';

// chakra
import { GridItem, Box, Text, Image, Flex, Avatar } from '@chakra-ui/react';

// moment
import moment from 'moment';

// icons
import { BiUpvote, BiDownvote } from 'react-icons/bi';

type VoteType = 'up' | 'down' | undefined;

interface ILoutl {
  userImage: string;
  userName: string;
  content: string;
  text: string;
  publishedAt: string;
}

interface VoteStats {
  up: number;
  down: number;
}

export default function Loutl({ userImage, userName, content, text, publishedAt }: ILoutl) {
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
        <Flex justify='space-between' mb={4}>
          <Flex>
            <Avatar src={userImage} />
            <Box ml='3'>
              <Text fontWeight='bold'>{userName}</Text>
              <Text fontSize='sm'>{text}</Text>
            </Box>
          </Flex>
          <Text fontSize={14} color='gray.400'>
            Posted on {moment(publishedAt).format('YYYY-MM-DD')}
          </Text>
        </Flex>
        <Box w='100%' display='flex' justifyContent='center'>
          <Image src={content} />
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

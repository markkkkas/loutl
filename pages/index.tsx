// chakra
import { Grid, Heading, GridItem } from '@chakra-ui/react';

// components
import TopFiveUsers from '@/components/TopFiveUsers';

export default function Home() {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
      <GridItem p={6} boxShadow='xs' rounded='md' bg='white'>
        <Heading size='lg' mb={5} align='center'>
          Categories
        </Heading>
      </GridItem>
      <GridItem colSpan={2} p={6} boxShadow='xs' rounded='md' bg='white'>
        <Heading size='lg' mb={5} align='center'>
          Random loutls
        </Heading>
      </GridItem>
      <GridItem p={6} boxShadow='xs' rounded='md' bg='white'>
        <Heading size='lg' mb={5} align='center'>
          Top 5 loutlers
        </Heading>
        <Grid templateRows='repeat(1, 1fr)' gap={2}>
          <TopFiveUsers />
        </Grid>
      </GridItem>
    </Grid>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}

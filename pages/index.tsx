// chakra
import { Grid, Heading, GridItem } from '@chakra-ui/react';

// components
import TopFiveUsers from '@/components/TopFiveUsers';

export default function Home() {
  return (
    <Grid templateColumns={['1fr', '1fr', 'repeat(4, 1fr)']} gap={6}>
      <GridItem w='100%' p={6} boxShadow='xs' rounded='md' bg='white'>
        <Heading size='lg' mb={5}>
          Categories
        </Heading>
      </GridItem>
      <GridItem w='100%' colSpan={2} p={6} boxShadow='xs' rounded='md' bg='white'>
        <Heading size='lg' mb={5}>
          Random loutls
        </Heading>
      </GridItem>
      <GridItem w='100%' p={6} boxShadow='xs' rounded='md' bg='white'>
        <Heading size='lg' mb={5}>
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

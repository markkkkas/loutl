// chakra
import { Grid, Heading, GridItem } from '@chakra-ui/react';

// components
import TopFiveUsers from '@/components/TopFiveUsers';
import CategoriesList from '@/components/CategoriesList';
import LoutlsList from '@/components/LoutlsList';

export default function Home() {
  return (
    <Grid templateColumns={['1fr', '1fr', 'repeat(4, 1fr)']} columnGap={[0, 0, 6]} rowGap={[6, 6, 0]}>
      <GridItem w='100%' p={6}>
        <Heading size='lg' mb={5}>
          Categories
        </Heading>
        <Grid templateRows='repeat(1, 1fr)' gap={2}>
          <CategoriesList />
        </Grid>
      </GridItem>
      <GridItem w='100%' colSpan={2} p={6}>
        <Grid templateRows='repeat(1, 1fr)' gap={10}>
          <LoutlsList />
        </Grid>
      </GridItem>
      <GridItem w='100%' p={6}>
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

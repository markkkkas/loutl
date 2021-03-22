// next
import NextLink from 'next/link';

// swr
import useSWR from 'swr';

// chakra
import { GridItem, Link, Skeleton, Text } from '@chakra-ui/react';

import fetcher from 'fetcher';

interface ICategory {
  id: number;
  name: string;
}

export default function CategoriesList() {
  const { data, error } = useSWR('/api/categories', fetcher);

  if (error) return <Text align='center'>Error while fetching data...</Text>;
  if (!data) {
    return (
      <>
        {[0, 0, 0, 0, 0].map((_, index) => (
          <GridItem key={index}>
            <Skeleton w='70%' h='7' />
          </GridItem>
        ))}
      </>
    );
  }

  function generateValidPath(path: string, endpoint: string) {
    const validEndpoint = endpoint.toLocaleLowerCase().replace(' ', '-');
    return `/${path}/${validEndpoint}`;
  }

  return (
    <>
      {data.categories.map((item: ICategory) => (
        <GridItem key={item.id}>
          <NextLink href={generateValidPath('categories', item.name)}>
            <Link>{item.name}</Link>
          </NextLink>
        </GridItem>
      ))}
    </>
  );
}

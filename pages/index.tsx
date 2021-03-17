import { PrismaClient } from '@prisma/client';
import Navigation, { NavItem } from '../components/Navigation';

interface IHome {
  navItems: NavItem[];
}

export default function Home({ navItems }: IHome) {
  return <Navigation navItems={navItems} />;
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const categories = await prisma.categories.findMany();

  const navItems = [
    {
      label: 'Shuffle',
      href: '#',
    },
    {
      label: 'Trending',
      href: '#',
    },
    {
      label: 'Fresh',
      href: '#',
    },
    {
      label: 'Categories',
      children: categories.map((item) => {
        return {
          label: item.name,
          href: `/categories/${item.name.toLocaleLowerCase()}`,
        };
      }),
    },
  ];

  return {
    props: { navItems },
  };
}

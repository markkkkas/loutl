interface IRoute {
  name: string;
  href: string;
}

interface IRoutes {
  navigation: {
    shuffle: IRoute;
    trending: IRoute;
    fresh: IRoute;
  };
  user: {
    profile: IRoute;
    loutls: IRoute;
  };
}

const routes: IRoutes = {
  navigation: {
    shuffle: {
      name: 'Shuffle',
      href: '/',
    },
    trending: {
      name: 'Trending',
      href: '/trending',
    },
    fresh: {
      name: 'Fresh',
      href: '/fresh',
    },
  },
  user: {
    profile: {
      name: 'Profile',
      href: '/user/profile',
    },
    loutls: {
      name: 'Loutls',
      href: '/user/loutls',
    },
  },
};

export default routes;

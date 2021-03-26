interface IRoute {
  name: string;
  href: string;
}

interface IRoutes {
  navigation: {
    home: IRoute;
    trending: IRoute;
  };
  user: {
    profile: IRoute;
    loutls: IRoute;
  };
}

const routes: IRoutes = {
  navigation: {
    home: {
      name: 'Home',
      href: '/',
    },
    trending: {
      name: 'Trending',
      href: '/trending',
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

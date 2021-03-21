// react
import { useEffect, useState } from 'react';

// next
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// next-auth
import { Provider } from 'next-auth/client';

// chakra
import { ChakraProvider, Heading } from '@chakra-ui/react';

// components
import Navigation from '@/components/Navigation/index';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', endLoading);
    router.events.on('routeChangeError', endLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', endLoading);
      router.events.off('routeChangeError', endLoading);
    };
  }, []);

  function renderPageWithNavigation() {
    return (
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    );
  }

  function renderLoading() {
    return <Heading>Loading...</Heading>;
  }

  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>loutl - laugh out loud</title>
      </Head>
      <ChakraProvider>{loading ? renderLoading() : renderPageWithNavigation()}</ChakraProvider>
    </Provider>
  );
}

export default App;

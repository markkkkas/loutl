// next
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// next-auth
import { Provider } from 'next-auth/client';

// chakra
import { ChakraProvider } from '@chakra-ui/react';

// components
import Navigation from '@/components/Navigation/index';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  function renderPageWithNavigation() {
    return (
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    );
  }

  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>loutl - laugh out loud</title>
      </Head>
      <ChakraProvider>{renderPageWithNavigation()}</ChakraProvider>
    </Provider>
  );
}

export default App;

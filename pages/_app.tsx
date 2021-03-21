// next
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import { AppProps } from 'next/app';

// next-auth
import { Provider } from 'next-auth/client';

// chakra
import { ChakraProvider } from '@chakra-ui/react';

// components
import Navigation from '@/components/Navigation/index';
import ProtectedRoute from '@/components/ProtectedRoute';

// utils
import { AuthEnabledComponentConfig } from '@/utils/auth';

type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> & Partial<AuthEnabledComponentConfig>;

interface CustomApp extends AppProps {
  Component: NextComponentWithAuth;
}

function App({ Component, pageProps }: CustomApp) {
  function renderComponent() {
    return Component.authenticationEnabled ? (
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    ) : (
      <Component {...pageProps} />
    );
  }

  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>loutl - laugh out loud</title>
      </Head>
      <ChakraProvider>
        <Navigation>{renderComponent()}</Navigation>
      </ChakraProvider>
    </Provider>
  );
}

export default App;

// next
import { AppProps } from 'next/app';

// next-auth
import { Provider } from 'next-auth/client';

// chakra
import { ChakraProvider } from '@chakra-ui/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default App;

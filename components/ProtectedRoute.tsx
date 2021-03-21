// react
import { useEffect } from 'react';

// next
import { useRouter } from 'next/router';

// next-auth
import { useSession } from 'next-auth/client';

// chakra
import { Box, Spinner } from '@chakra-ui/react';

interface IProtectedRoute {
  children: JSX.Element;
}

export default function IProtectedRoute({ children }: IProtectedRoute): JSX.Element {
  const [session, loading] = useSession();
  const router = useRouter();
  const isAuthenticated = !!session?.user;

  useEffect(() => {
    if (loading) return;
    if (!isAuthenticated) {
      router.push('/');
      return;
    }
  }, [isAuthenticated, loading]);

  if (isAuthenticated) {
    return children;
  }

  return (
    <Box minH='80vh' display='flex' alignItems='center' justifyContent='center'>
      <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    </Box>
  );
}

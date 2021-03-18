// next
import { useRouter } from 'next/router';

// next-auth
import { useSession } from 'next-auth/client';

// chakra
import Navigation from '@/components/Navigation';

export default function Profile() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (session) {
    return (
      <>
        <Navigation />
        <h1>User Profile Page</h1>
      </>
    );
  }

  router.push('/');
  return <h1>Loading...</h1>;
}

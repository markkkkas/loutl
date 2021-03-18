// next
import { useRouter } from 'next/router';

// next-auth
import { useSession } from 'next-auth/client';

// chakra
import Navigation from '@/components/Navigation';
import Loading from '@/components/Loading';

export default function Loutls() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) {
    return <Loading />;
  }

  if (session) {
    return (
      <>
        <Navigation />
        <h1>User Loutls Page</h1>
      </>
    );
  }

  router.push('/');
  return <Loading />;
}

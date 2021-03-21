// next-auth
import { getSession } from 'next-auth/client';

export default function Loutls() {
  return (
    <>
      <h1>User Loutls Page</h1>
    </>
  );
}

export async function getStaticProps() {
  const session = await getSession();

  if (!session) {
    return {
      redirect: {
        permament: true,
        destination: '/',
      },
    };
  }

  return { props: {} };
}

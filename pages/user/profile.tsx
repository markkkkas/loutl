// next-auth
import { getSession } from 'next-auth/client';

export default function Profile() {
  return <h1>User Profile Page</h1>;
}

export async function getServerSideProps() {
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

// next
import { GetServerSidePropsContext } from 'next';

// next-auth
import { getSession } from 'next-auth/client';

export default function Profile() {
  return <h1>User Profile Page</h1>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

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

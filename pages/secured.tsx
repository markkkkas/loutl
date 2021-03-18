// next-auth
import { signIn, useSession } from 'next-auth/client';

export default function Secured() {
  const [session, loading] = useSession();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (session) {
    return <h1>Hi</h1>;
  } else {
    return (
      <>
        <h1>You are not logged in!</h1> <button onClick={() => signIn()}>SignIn</button>
      </>
    );
  }
}

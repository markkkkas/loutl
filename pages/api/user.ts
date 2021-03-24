// next
import { NextApiRequest, NextApiResponse } from 'next';

// next-auth
import { getSession } from 'next-auth/client';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const session = await getSession({ req });

      if (!session) {
        return res.send({ authenticated: false });
      }

      return res.status(200).json({ success: true, authenticated: true, image: session.user.image });
    default:
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}

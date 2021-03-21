// next
import { NextApiRequest, NextApiResponse } from 'next';

// prisma
import prisma from '../../../prismaClient';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const users = await prisma.user.findMany();
      return res.status(200).json({ success: true, users: users });
    default:
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}

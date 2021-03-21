// next
import { NextApiRequest, NextApiResponse } from 'next';

// prisma
import prisma from '../../../prismaClient';

interface IQuery {
  count?: string;
  by?: string;
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const query: IQuery = req.query;

  switch (req.method) {
    case 'GET':
      const users = await prisma.user.findMany({
        select: { name: true, image: true },
        take: parseInt(query.count),
      });

      return res.status(200).json({ success: true, users: users });
    default:
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}

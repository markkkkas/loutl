// next
import { capitalize } from '@/utils/strings';
import { NextApiRequest, NextApiResponse } from 'next';

// prisma
import prisma from '../../../prismaClient';

interface IQuery {
  category?: string;
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const query: IQuery = req.query;

  switch (req.method) {
    case 'GET':
      const loutls = await prisma.loutl.findMany({
        select: {
          User: { select: { name: true, image: true } },
          text: true,
          content: true,
          publishedAt: true,
        },
        where: { Category: { name: capitalize(query?.category) } },
        orderBy: { publishedAt: 'desc' },
      });
      return res.status(200).json({ success: true, loutls });
    default:
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}

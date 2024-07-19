// pages/api/ganado.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const ganado = await prisma.ganado.findMany();
      res.status(200).json(ganado);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching ganado' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

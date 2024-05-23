import { NextApiResponse } from 'next';

export function allowAllOrigins(res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
}

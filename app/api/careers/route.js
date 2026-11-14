import { handle } from '@/lib/server';
export const runtime = 'nodejs';
export const POST = (req) => handle(req, 'careers');

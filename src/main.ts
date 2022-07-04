import * as dotenv from 'dotenv';
import { fastify, FastifyInstance } from 'fastify';
import staticAssets from './plugins/staticAssets.js';

dotenv.config();

declare global {
  interface ImportMeta {
    url: string
  }}

const f: FastifyInstance = fastify({ logger: true });
// @ts-ignore
const puerto: any = process.env.PORT;

f.register(staticAssets);

// @ts-ignore
f.get('/', (request: any, reply: any) => {
  return reply.sendFile('test.html');
});

// @ts-ignore
f.get('/test', (request: any, reply: any) => {
  return reply.send('Mensaje desplegado en la ruta /test');
});

// @ts-ignore
f.listen({ port: puerto }, (err: any, address: any) => {
  if (err) {
    f.log.error(err);
    process.exit(1);
  }
});

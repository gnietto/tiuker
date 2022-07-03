import * as dotenv from 'dotenv';
import { fastify, FastifyInstance } from 'fastify';
import staticAssets from './plugins/staticAssets.js';

dotenv.config();

const f: FastifyInstance = fastify({ logger: true });
// @ts-ignore
const puerto: any = process.env.PORT;

f.register(staticAssets);

f.get('/', (request: any, reply: any) => {
  console.log(request.body);
  return reply.sendFile('test.html');
});

f.get('/test', (request: any, reply: any) => {
  console.log(request.body);
  return reply.send('Mensaje desplegado en la ruta /test');
});

f.listen({ port: puerto }, (err: any, address: any) => {
  if (err) {
    f.log.error(err);
    process.exit(1);
  }
  console.log(`Listening on ${address}`);
});

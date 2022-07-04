import * as dotenv from 'dotenv';
import { fastify } from 'fastify';
import staticAssets from './plugins/staticAssets.mjs';

dotenv.config();

const f = fastify({ logger: true });
const puerto = process.env.PORT;

f.register(staticAssets);

f.get('/', (request, reply) => {
  return reply.sendFile('test.html');
});

f.get('/test', (request, reply) => {
  return reply.send('Mensaje desplegado en la ruta /test');
});

f.listen({ port: puerto }, (err, address) => {
  if (err) {
    f.log.error(err);
    process.exit(1);
  }
});

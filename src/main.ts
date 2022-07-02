import { fastify, FastifyInstance } from 'fastify';
import staticAssets from './plugins/staticAssets.js';

const PORT: number = 3002;
const f: FastifyInstance = fastify({ logger: true });

f.register(staticAssets);

f.get('/', function (request: any, reply: any) {
  console.log(request.body);
  return reply.sendFile('test.html');
});

f.get('/test', function (request: any, reply: any) {
  console.log(request.body);
  return reply.send('Mensaje desplegado en la ruta /test');
});

f.listen({ port: PORT }, function (err: any, address: any) {
  if (err) {
    f.log.error(err);
    process.exit(1);
  }
  console.log(`Listening on ${address}`);
});

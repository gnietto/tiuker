import { fastify, FastifyInstance } from 'fastify';

const f: FastifyInstance = fastify({ logger: true });

f.get('/', function (request: any, reply: any) {
  console.log(request.body);
  reply.send('Primer mensaje desplegado en ruta raíz');
});

f.get('/test', function (request: any, reply: any) {
  console.log(request.body);
  reply.send('Mensaje desplegado en la ruta raíz slash test');
});

f.listen(function (err: any) {
  if (err) {
    f.log.error(err);
    process.exit(1);
  }
});

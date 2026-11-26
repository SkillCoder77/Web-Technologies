import express from 'express';

const router = express.Router();

router.get('/', (_request, response) => {
  response.send('Login Page');
});

router.post('/', (request, response) => {
  const { username = '' } = request.body ?? {};

  response.type('text/plain').send(`Login submitted${username ? ` for ${username}` : ''}.`);
});

export default router;

import express from 'express';
import loginRouter from './Routes/login.js';
import signupRouter from './Routes/signup.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Hello, Web Technologies Lab!');
});

app.use('/login', loginRouter);
app.use('/signup', signupRouter);

// The path value is a username; optional extra values can be sent as a query.
app.get('/display/:username', (request, response) => {
  const { username } = request.params;
  const { message = '' } = request.query;

  response.type('text/plain').send(`Username: ${username}\nMessage: ${message}`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

import express, { Application } from 'express';

import routes from './routes/Routes';

const app: Application = express();

app.use(express.json());

app.use('/api', routes);

export default app;
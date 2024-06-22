import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const port = 1245;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

export default app;

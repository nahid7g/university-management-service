import cors from 'cors';
import express, { Application, urlencoded } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './routes';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Application route
app.use('/api/v1', routes);

// app.get('/', (req, res) => {
//   throw new ApiError(5000, 'Something went wrong')
// })

app.use(globalErrorHandler);

export default app;

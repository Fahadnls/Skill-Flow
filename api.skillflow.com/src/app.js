import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env.js';
import { errorMiddleware, notFoundMiddleware } from './middlewares/error.middleware.js';
import { adminRouter } from './routes/ap/index.js';
import { mobileRouter } from './routes/ma/index.js';
import { publicRouter } from './routes/public.routes.js';

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: '1mb' }));
app.use(publicRouter);
app.use('/file', express.static(env.fileRoot));
app.use('/api', helmet());
app.use('/api/ap', adminRouter);
app.use('/ma', mobileRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

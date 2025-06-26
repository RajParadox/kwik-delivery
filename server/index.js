import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './src/config/connectDB.js';
import userRouter from './src/route/user.route.js';

const app = express();
app.use(cors({
    credentials: true,
    origin: ''
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: false
}));

const PORT =  8080 || process.env.PORT;

app.get('/', (request, response) => {
    response.json({
        message: 'Welcome to the Kwik server!'
    });
});
app.use('/api/user', userRouter);
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});


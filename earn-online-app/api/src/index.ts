import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import appsRoutes from './routes/apps';
import usersRoutes from './routes/users';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/apps', appsRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoute from './routers/authRoute.js';

dotenv.config();

// 1. Import kết nối Supabase
import supabase from './config/supabaseClient.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => res.send('test api thành công'));

// Public routes
app.use('/api/auth', authRoute);

// Private routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

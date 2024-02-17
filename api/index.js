import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongo db");
}).catch((err) => {
    console.log(err);
}); 

mongoose.connect

const app = express();

app.listen(3000, () => {
    console.log('Server is running');
})
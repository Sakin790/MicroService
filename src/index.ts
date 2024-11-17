import express, { Application,Request, Response } from 'express';

const app:Application = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is Working ");
})
import express from 'express';
import initMiddleware from './middleware';

const app = express();

const done = () => {
  app.listen(3000, () => {
    console.log(`Server is listening on port: http://localhost:3000`);
  });
};

initMiddleware(express, app, done);

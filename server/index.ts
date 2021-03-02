import { Request, Response, NextFunction} from 'express';
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT ? process.env.PORT : 8626;
const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: "GET"
}

app.use(cors(corsOptions));
app.use(express.static("./dist/tgc-companion/"));

app.get('/', (req:Request, res:Response) => {
  res.sendFile('index.html', {root: 'dist/tgc-companion/'})
});

// start the Express server
app.listen(PORT, () => {
  console.log(`server started on ${ PORT }`);
});

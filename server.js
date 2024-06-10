const express = require('express');
const cors = require('cors');

const ensembleRoutes = require('./src/ensemble/routes');

const app = express();

app.use(express.json());

// const corsOptions = {
//     origin: ['*'],
//     optionsSuccessStatus: 200,
//   };
 
// app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

const port = 3000;

app.get('/', (req, res) => {
    res.send('You\'ve reached the percussion ensemble API. There is no data at this path.');
});

app.use('/api/v1/ensembles', ensembleRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
const express = require('express');
const cors = require('cors');

const ensembleRoutes = require('./src/ensemble/routes');

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'https://percussionensembledatabase.netlify.app',
    optionsSuccessStatus: 200,
    // credentials: true,
    // origin: true,
    // allowedHeaders: [
    //   'Origin',
    //   'Content-Type',
    //   'Accept',
    //   'Authorization',
    //   'X-Request-With',
    //   ],
  };
 
app.use(cors(corsOptions));


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('You\'ve reached the percussion ensemble API. There is no data at this path.');
});

app.use('/api/v1/ensembles', ensembleRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
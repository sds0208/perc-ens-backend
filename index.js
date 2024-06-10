const express = require('express');
const cors = require('cors');

const ensembleRoutes = require('./src/ensemble/routes');

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'https://percussionensembledatabase.netlify.app',
    optionsSuccessStatus: 200,
    methods: ['GET']
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

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    'https://percussionensembledatabase.netlify.app'
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('You\'ve reached the percussion ensemble API. There is no data at this path.');
});

app.use('/api/v1/ensembles', ensembleRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
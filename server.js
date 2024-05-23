const express = require('express');

const ensembleRoutes = require('./src/ensemble/routes');

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('You\'ve reached the percussion ensemble API. There is no data at this path.');
});

app.use('/api/v1/ensembles', ensembleRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
import express from 'express';
import env from './utils/env';

const app = express();

app.listen(env.port, () => {
    console.log('Server is running on port', env.port);
});

app.get('/', (req, res) => {
    res.send('OK');
});

// match regexp /bot12345:Xxxxm22r23f23fxx/
app.get(/\/bot\d+:[\w\d]+/, (req, res) => {
    // get file
    const filePath = `${env.binPath}/${req.url.substring(4)}`;

    console.log('Sending file:', filePath);

    // send file
    res.sendFile(filePath);
});

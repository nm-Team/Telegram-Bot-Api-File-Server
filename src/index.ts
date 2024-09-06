import express from 'express';
import env from './utils/env';

const app = express();

app.listen(env.port, () => {
    console.log('Server is running on port', env.port);
});

app.get('/', (req, res) => {
    res.send('OK');
});

// match regexp
app.get(/\/bot\d+:[\w\d]+/, (req, res) => {
    // deny accessing td.binlog
    if (req.url.includes('td.binlog')) {
        res.status(403).send('Access denied');
        return;
    }

    // get file
    const filePath = `${env.binPath}/${req.url.substring(4)}`;

    console.log('Sending file:', filePath);

    // send file
    res.sendFile(filePath);
});

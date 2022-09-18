
const express = require('express');
const app = express();

const port = 7777;

app.get('/resume', (req, res) => {
    res.sendFile('resume.txt', { root: 'static/' })
});
app.use(express.static('dist/', { extensions: ['html'], redirect: false}));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

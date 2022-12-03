import express from 'express';
import path from 'path';
const app = express()
const port = process.env.PORT || 3000;

app.get('/weather', (req, res) => {
    console.log("requested ip: ", req.ip);
    res.send({
        temp: 30,
        humidity: 72,
        serverTime: new Date().toString()
    });
})

app.get('/about', (req, res) => {
    console.log("requested ip: ", req.ip);
    res.send('about!')
})
const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname , '/weather-app/build')));
app.use('*', express.static(path.join(__dirname , '/weather-app/build')));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
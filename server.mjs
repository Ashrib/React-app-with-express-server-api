import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

app.get('/profile', (req, res) => {
    console.log("requested ip: ", req.ip);
  res.send('profile!')
})

app.get('/about', (req, res) => {
    console.log("requested ip: ", req.ip);
    res.send('about!')
})
// app.use('/', express.static())




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
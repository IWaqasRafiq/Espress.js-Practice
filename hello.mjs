import express from 'express';
import path from 'path';
const __dirname = path.resolve();

import apiv1Router from './API1/index.mjs'
import apiv2Router from './API2/index.mjs'

const app = express()

app.use(express.json()); 


app.use("/api/v1", apiv1Router)
app.use("/api/v2", apiv2Router)

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log('this is login!', new Date());
  res.send('this is login v1' + new Date());
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
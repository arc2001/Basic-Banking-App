const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv').config()
 console.log(process.env.MONGOURI)
const app = express()
const URI = "mongodb+srv://admin_anjali:Anjali123@cluster0.zjxqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
} catch {
  console.log('ERROR')
}

app.use(express.json({ extended: false }))

app.use('/api/customers', require('./routes/customers'))
app.use('/api/transaction', require('./routes/transactions'))

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))

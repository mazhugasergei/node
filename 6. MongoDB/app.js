require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const indexRoute = require('./routes/index.router')
const noteRoute = require('./routes/note.router')



const app = express()



// set view engine
app.set('view engine', 'ejs')
// set views location
app.set('views', `${__dirname}/views`)
// static files
app.use(express.static(`${__dirname}/public`))
// 
app.use(express.urlencoded({ extended: true }))



// setting MongoDB
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to the DB')
    app.listen(3000)
  })
  .catch(err => console.log(err))



// routes
app.use(indexRoute)
app.use('/note', noteRoute)



// 404 middleware
app.use((req, res)=>{
  res.status(404).render('404')
})
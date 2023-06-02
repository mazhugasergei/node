const express = require('express')
const mongoose = require('mongoose')

const app = express()

// set view engine
app.set('view engine', 'ejs')
// set views location
app.set('views', `${__dirname}/views`)
// static files
app.use(express.static(`${__dirname}/public`))
// listen to the server
app.listen(3000)

// routes
app.get('/', (req, res)=>{
  res.render('index', { h1: 'Home Page' })
})
app.get('/create', (req, res)=>{
  res.render('create')
})

// 404 middleware
app.use((req, res)=>{
  res.status(404).render('404')
})
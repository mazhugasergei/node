const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
  // set header
  res.setHeader('Content-Type', 'text/html')

  // let path = `${__dirname}/view/`
  // switch(req.url){
  //   case '/':
  //     path += 'index.html'
  //     res.statusCode = 200
  //     break
  //   case '/about':
  //     path += 'about.html'
  //     res.statusCode = 200
  //     break
  //   case '/about-me':
  //     res.statusCode = 301
  //     res.setHeader('Location', '/about')
  //     res.end()
  //     break
  //   default:
  //     path += '404.html'
  //     res.statusCode = 404
  // }

  // default html files directory
  const default_path = `${__dirname}/view/`
  // decide which page user will get
  let page = ''
  // home page
  if(req.url === '/') page = 'index'
  // redirects
  else if(req.url === '/about-me'){
    res.setHeader('Location', '/about')
    res.end()
  }
  // other pages
  else if(fs.existsSync(`${default_path + req.url}.html`)) page = req.url
  // 404 page
  else{
    page = '404'
    res.statusCode = 404
  }
  // path of the page that'll be sent to the client
  const path = `${default_path + page}.html`

  fs.readFile(path, (err, data) => {
    if(err) console.error(err)
    else res.write(data)
    res.end()
  })
})

server.listen(3000, 'localhost', ()=>{
  console.log("listening on port 8080 (http://localhost:8080/)")
})
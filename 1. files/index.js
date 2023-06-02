const fs = require('fs')

// reading
fs.readFile('./docs/data.txt', (err, data)=>{
  if(err) console.error("Error reading file")
  else console.log(data.toString())
})

// writing
fs.writeFile('./docs/data1.txt', "Hello, world", ()=>{
  console.log("! done writing the file")
})

// directories
if(!fs.existsSync('./docs/new_dir')){
  fs.mkdir('./docs/new_dir', (err)=>{
    if(err) console.error(err)
    else console.log("! new directory created")
  })
}
else{
  fs.rmdir('./docs/new_dir', (err)=>{
    if(err) console.error(err)
    else console.log("! removed new_dir")
  })
}

// deleting
if(fs.existsSync('./docs/data1.txt')){
  fs.unlink('./docs/data1.txt', (err)=>{
    if(err) console.error(err)
    else console.log("! removed data1.txt")
  })
}
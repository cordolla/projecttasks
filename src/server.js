import http from 'node/http'



const server = http.createServer(async (req, res) => {
  

  await JSON(req, res)
})


server.listen(3335);
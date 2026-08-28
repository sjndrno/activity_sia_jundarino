//package imports
const express = require('express');

//server setup
const server = express()
const port = 1022
const hostname = ' 192.168.2.36'
server.listen(port, hostname, () => {
    console.log('Server is running: ${hostname}:${port}')
})


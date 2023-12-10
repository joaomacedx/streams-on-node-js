import http from 'node:http'
import InverseNumberStream from '../InverseNumberStream.mjs'

// request => ReadableStream
// response => WritableStream

const server = http.createServer((request, response) => {

  return request
    .pipe(new InverseNumberStream())
    .pipe(response)
})

server.listen(3334)

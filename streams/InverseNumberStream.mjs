import { Transform } from 'node:stream'

export class InverseNumberStream extends Transform {
  _transform(chunck, encoding, callback){
    const transformed = Number(chunck.toString()) * -1
    console.log(transformed)
    callback(null, Buffer.from(String(transformed)))
  }
}

export default InverseNumberStream
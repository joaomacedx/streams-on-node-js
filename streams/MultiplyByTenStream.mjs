import { Writable } from 'node:stream'

class MultiplyByTenStream extends Writable {
  _write(chunck, encoding, callback) {
    console.log(new Number(chunck.toString()))
    callback()
  }
}
export default MultiplyByTenStream
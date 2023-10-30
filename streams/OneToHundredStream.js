import { Readable } from 'node:stream';

export class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++

    if (i > 100) {
      this.push(null)
    } else {
      const buff = Buffer.from(String(i))
      this.push(buff);
    }
  }
}
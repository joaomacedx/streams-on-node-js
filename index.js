import MultiplyByTenStream  from './streams/MultiplyByTenStream.mjs'
import OneToHundredStream  from './streams/OneToHundredStream.mjs'
import InverseNumberStream from './streams/InverseNumberStream.mjs'

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())
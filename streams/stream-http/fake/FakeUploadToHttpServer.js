import OneToHundredStream  from '../../OneToHundredStream.mjs'

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half'
})
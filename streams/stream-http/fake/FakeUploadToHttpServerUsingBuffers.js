import OneToHundredStream  from '../../OneToHundredStream.mjs'

fetch('http://localhost:3335', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half'
}).then(response => {
  return response.text()
}).then(data => {
  console.log(data)
})
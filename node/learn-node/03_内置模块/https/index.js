const https = require('https');

// https.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike', (res) => {

//   let content = ''

//   res.on('data', (chunk) => {
//     content += chunk 
//   })

//   res.on('end', () => {
//     console.log(content);
//   })

// })

const req = https.get(
  'https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike',
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

req.on('response', res => {
  let content = ''
  res.on('data', (chunk) => {
    content += chunk
  })
  res.on('end', () => {
    console.log(content);
  })
})
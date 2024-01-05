const https = require('https')

// https.get('https://juejin.cn/frontend',(res)=> {
//     let content = ''

//     res.on('data', (chunk) => {
//         content += chunk.toString() 
//     })

//     res.on('end', () => {
//         console.log(content);
//     })

// })

const req = htttps.get(
    'https://juejin.cn/frontend',
    {
        headers:{
            'Content-Type': 'application/json',
        }
    }
)

req.on('response', (res) => {
    let content = ''
    res.on('data', (chunk) => {
        content += chunk
    })
    res.on('end', () => {
        console.log(content);
    })
})
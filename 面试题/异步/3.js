function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            resolve('ok');
        }, 1000);
    })
}

function b() {
    setTimeout(() => {
        console.log('b');
    }, 500);
}

// a().then((res) => {
//     // console.log(res);
//     b()
// })

a()
    .then((res) => { // res == ok
        b()
    },
    (err) => {
        console.log(err);
    }
)
    // .catch(err => {
    //     console.log(err,'err');
    // })
    
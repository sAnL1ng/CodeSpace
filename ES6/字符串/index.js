let date = new Date()

// console.log(date.getFullYear() + '-' + (Number(date.getMonth())+1) + '-' + date.getDate() + '-' 
// + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());

let time1 = `${date.getFullYear()}年${1+date.getMonth()}月${date.getDate()}日`
console.log(time1);

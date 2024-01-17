const formateDate = (date) => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if(month < 10) {
        month = '0' + month
    }
    if(day < 10){
        day = '0' + day
    }
    return `${year}年 ${month}月 ${day}日`
}

console.log(formateDate(new Date()));

module.exports = {
    formateDate
}
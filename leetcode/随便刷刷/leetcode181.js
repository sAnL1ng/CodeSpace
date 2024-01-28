let message = "the sky is blue"

var reverseMessage = function(message) {
    let arr = message.split(' ')
    arr.reverse()
    let n = 1
    let len = arr.length
    arr.join('')
    let s = arr.join(' ')
    console.log(s);
}
reverseMessage(message)
# map + parseInt 经典题目

- 我在解这道题的时候去看了下MDN文档
    map     callback 返回值是由callback每一项组成的一个新数组 
    callback 会接收到`item`(当前项) `index`当前项在数组中的下标(索引) `array`(数组本身) 三个参数

    parseInt 就是当前的callback item，可选的参数 ?radix(进制基数)
        默认 10 进制
        0 无效 ， 使用10
        1进制 如果item为2， NaN
        2进制 如果item为3， NaN
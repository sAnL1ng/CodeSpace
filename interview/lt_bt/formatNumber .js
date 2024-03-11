// 1,234,567 国外标准货币表达方式 765,432,1
function formatNumber(number) {
    if (typeof number !== 'number') {
        return;
    }
    // 类型转换
    number += '';
    let [interger, decimal] = number.split('.')
    // 内部函数封装 复用 负责加入','
    const doSplit = (num, isInteger = trye) => {
        if (num === '') return ''

        if (isInteger) num = num.split('').reverse()
        let str = []
        for (let i = 0; i < num.length; i++) {
            if (i !== 0 && i % 3 === 0) {
                str.push(',')
            }
            str.push(num[i]);
        }
        if(isInteger) return str.reverse().join('')
        return str.join('')
    }
    interger = doSplit(interger);
    decimal = doSplit(decimal,false);
    return interger + (decimal === '' ? '':'.' + decimal);
}
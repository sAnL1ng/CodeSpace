// 记忆函数 闭包的高级功能
function memorize(fn) {
    if(typeof(fn) !== 'function') {
        throw new Error('请传入函数')
    }
    var cache = {} // key:value O(1) 空间换时间
    return function () {
        //  唯一性 
        var key = arguments.length +
             Array.prototype.join.call(arguments,',')
             console.log(key);
            if (key in cache) {
                return cache[key]
            }else{

                return cache[key] = fn.apply(this, arguments)
            }
    }
}

// commonjs 模块化方案
module.exports = memorize
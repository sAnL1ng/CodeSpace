# 1. js 数组有哪些方法？
1. 增：push unshift splice concat
2. 删：pop shift splice slice
3. 改：rever sort
4. 查：indexOf lastIndexOf includes find 
5. 遍历： forEach map filter every some reduce 
    - forEach((item,i,arr) => {}): 不会返回一个新数组，除非设置arr[i]，不然不会修改原数组，否则不可以修改原数组。
    - map((item,i,arr) => {}):返回一个长度和原数组长度一样的数组，可以修改原数组。
6. 转换：join split

- forEach & map 区别：
1. map会返回一个新的数组
2. return 无法终止forEach的循环，forEach中没有 break和continue

# 2. js 字符串有哪些方法？
1. 增: concat padEnd padStart
2. 删: slice substr substring
3. 改: replace repeat trim trimLeft trimRight toUpperCase toLowerCase
4. 查: includes indexOf lastIndexOf charAt startsWith EndsWith 
5. 转换：charCodeAt split 

# 3. == 和 === 的区别

# 4. 说说JS中的类型转换
- 是什么
    JS里面有原始类型和引用类型的区分

- 显示和隐式
    1. 开发中通常需要将一个类型转为另一个类型时，通过调用构造函数实现显示类型转换。
    2. 当开发中碰到比较运算符或者算数运算符时，当符号两边的类型不一致时，JS引擎会自动进行隐式类型转换。

# 5. 说说深浅拷贝
- 是什么？
    拷贝指的是将一个对象中的元素复制到一个新的对象中，拷贝又分为浅拷贝和深拷贝。
    浅拷贝只拷贝对象的引用地址，深拷贝会层层拷贝每一个属性值，不受原对象修改值的影响

- 浅拷贝常用方法：
    1. Object.assign({}, x) 拷贝对象
    2. concat               连接多个数组返回一个新数组
    3. slice                不传递参数返回一个新数组
    4. 数组解构将原数组的元素解构赋值给新数组

- 深拷贝常用方法:
    1. JSON.parse(JSON.stringify(a))    ---- 不能拷贝Symbol function undefined 不能处理循环引用和BigInt
    2. structuredClone  ---- 不能拷贝 Symbol function
    3. MessageChannel   ---- 通过消息管道来实现深拷贝不过它是异步
    4. 手写通过递归实现深拷贝

- 函数的拷贝


# 6. 说说你对闭包的理解
- 是什么
    根据词法作用域的规则，内部函数一定能访问它外部函数中的变量，当内部函数对外部函数中的变量存在引用，且被提到外部函数之外调用，即使外部函数执行完毕，内部函数的执行上下文也无法完全销毁，而是会将内部函数引用的变量作为一个集合保留在调用栈中，该集合被称为闭包。
- 作用
    1. 定义私有变量
    2. 封装模块
    3. 延长变量生命周期

- 缺点
    1. 内存泄漏

# 7. 说说原型
- 是什么
    原型是一个对象，分为隐式原型和显示原型。隐式原型是对象上的__proto__属性,显示原型是函数身上的Prototype属性。
    当我们要访问一个对象的属性时，JS引擎不仅会在该对象上查找，还会查找对象的隐式原型，顺着隐式原型层层往上查找，直到找到null。
    对象的隐式原型等于创建该对象的构造函数的显示原型。

    1. 函数的__proto__ === Function.Prototype 箭头函数除外
    2. Object.create(null)

# 8. js中如何实现继承
1. 原型链继承
   `缺点`:    
        1. 多个对象之间共用了同一个原型，属性会相互影响
        2. 子类无法给父类传参
2. 构造函数继承
   `缺点`:  
        1. 无法继承到父类原型上的属性
3. 组合继承（经典继承）
    `缺点`:  
        1. 导致实例对象原型里面的constructor属性指向的是不是父类构造函数而是父类的父类的构造函数，可以手动设置来解决。
        2. 父类被调用两次，性能不够完美。
4. 原型式继承
    `缺点`:
        1. 多个对象之间共用了同一个原型，属性会相互影响
5. 寄生组合继承
    `缺点`:无
6. class 继承

# 9. 说说你对this的理解
- 是什么
    this是函数中的一个关键字，代表的是函数作用域的指向  

- 绑定规则
    1. 默认绑定 -- 函数在哪个词法作用域中生效，函数就指向哪个词法作用域 
    2. 隐式绑定 -- 当一个函数被一个对象所拥有且调用，this就会指向该对象
    3. 隐式丢失 -- 当多个对象链式调用函数，this指向最近的对象
    4. 显示绑定 -- call apply bind
    5. new绑定  -- this指向实例对象 

- 箭头函数
    箭头函数中没有this,写在箭头函数内部的this也是它外部非箭头函数中的this。
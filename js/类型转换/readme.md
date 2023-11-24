# 基本数据类型的转换
1. 转布尔值 只有字符串和数字可以转换成布尔值为true 并且需要有实际的值
2. 转数字
3. 转字符串
4. 转对象


# 对象转原始值

- 转字符串 调用的其实就是Object.prototype.toString()
1. {}.toString() 返回由 "[Object" 和 class 和 "]" 组成的字符串
2. [].toString() 返回由数组内部元素以逗号拼接的字符串
3. xx.toString() 直接返回字符串字面量  

- valueOf
用于转换包装类 只对包装类中的三种原始数据类型对象转换成原始数据类型有效

# ToPrimitive(Object数据类型转原始数据类型)

- ToPrimitive(obj,Number)  ==> Number()
1. 如果参数obj是数据基本类型，直接返回
2. 否则，调用 `valueOf` 方法,如果得到原始值，则返回 
3. 否则，调用 `toString` 方法,如果得到原始值，则返回
4. 否则，报错


- ToPrimitive(obj,String)  ==> String()
1. 如果参数obj是数据基本类型，直接返回
2. 否则，调用 `toString` 方法,如果得到原始值，则返回
3. 否则，调用 `valueOf` 方法,如果得到原始值，则返回 
4. 否则，报错

# 对象转布尔就是true
- ToPrimitive(obj,Boolean)  ==> 直接True

# 一元运算符 +

# 二元运算符 +
lprim + rprim

ToPrimitive(v1) + ToPrimitive(v2)
1. 当+两边有一个是字符串则按字符串进行拼接
2. 否则，转到 number 进行计算
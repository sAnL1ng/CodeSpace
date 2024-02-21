export function ref(val) { // 将原始数据变成响应式
    return createRef(val)
}

function createRef(val) {
    // 判断val是否已经是响应式
    
    // 将val变成响应式
    return new RefImpl(val)
}

class RefImpl {
    constructor(val) {
        this.__v_isRef = true, // 给每一个被ref操作过的属性值都添加标记
        this._value = val
    }
    get value() {
        return this._value
    }
    set value(val) {
        this._value = val
    }
}
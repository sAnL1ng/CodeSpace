import { computed, inject,reactive } from 'vue'

const STORE_KEY = '__store__'
// vue3.0 版本
function useStore() {
    return inject(STORE_KEY)
}

class Store {
    constructor(options) {
        this.$options = options 
        // 私有变量 store.state.item 
        // state是一个方法 返回一个对象，通过响应式代理成一个proxy实例 所以需要通过JS内置的get方法进行读值
        this._state = reactive({
            data: options.state() // proxy实例
        })
        this._mutations = options.mutations
        this._actions = options.actions
        this.getters = {}

        Object.keys(options.getters).forEach(name => {
            const fn = options.getters[name]
            this.getters[name] = computed(() => fn(this.state))
        })
    }
    get state() {
        return this._state.data
    }

    commit = (type,payload) => {
        const entry = this._mutations[type]
        entry && entry(this.state,payload)
    }

    dispatch(type,payload) {
        const entry = this._actions[type]
        return entry && entry(this,payload)
    }

    install(app) { // app 全局对象
        // 电台 发布者
        app.provide(STORE_KEY, this) // provide -> vue内置的方法
    }
}
// 单一状态树对象
function createStore(options) {
    return new Store(options);
}

export { createStore, useStore }
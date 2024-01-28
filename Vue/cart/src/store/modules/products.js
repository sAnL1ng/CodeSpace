import shop from '../../api/shop'
// 单纯的想数据
const state = {
    all: [],
}

const getters = {
}

const actions = {
    getAllProducts({ commit }){
        shop.getProducts(products => {
            commit('setProducts',products)
        })
    }
}
// 规则 同步操作 可变量的声明
const mutations = {
    setProducts(state,products){
        state.all = products; 
    }
}

// state.cart.state 
export default {
    namespaced: true, // 支持命名空间 
    state,
    getters,
    actions,
    mutations
}
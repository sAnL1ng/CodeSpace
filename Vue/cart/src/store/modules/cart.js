const state = {
    items:[]
}

const getters = {
}

const actions = {
    addProductToCart({ commit,state },product){
        if(product.inventory > 0){
            const cartItem = state.items.find(item => item.id === product.id)
            if(!cartItem){
                commit('pushProductToCart',{ id: product.id })
            }else {
                commit('incrementItemQuantity', cartItem)
            }
        }
    }
}

const mutations = {
    pushProductToCart(state, { id }){
        state.items.push({
            id,
            quantity:1
        })
    },
    incrementItemQuantity(state, { id } ){
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
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
// import { createStore } from 'vuex'
import { createStore } from './gvuex'

// 全局共享 组件树 状态树
// 状态树对象，节点state modules 分支
// $store.state.goods.item
// 单例模式
const store = createStore({
    state(){
        return {
            count:1
        }
    },
    getters:{
        double(state){
            return state.count * 2
        }
    },
    mutations:{
        add(state){
            state.count++
        }
    },
    actions:{
        asyncAdd({ commit }){
            setTimeout(()=>{
                commit('add')
            },1000)
        }
    }
})
export default store
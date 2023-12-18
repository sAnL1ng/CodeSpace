import { createStore } from "vuex"

const store = createStore({
    state() {  // data
        return {
            lists: ['html', 'css', 'js']
        }
    },
    mutations: { //methods
        listsAdd(state,val){
            state.lists.push(val)
        }
    }
})

export default store
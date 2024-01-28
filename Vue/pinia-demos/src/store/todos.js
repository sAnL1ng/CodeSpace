// todo 数据管理模块 state actions
import { ref } from 'vue'
import { defineStore } from 'pinia'
//vue3.0 hook 函数
export const useTodoStore = defineStore("todo",()=>{
    const todos = ref([
        {txt:'人生不就是大起大落'} 
    ])
    const addTodo = () => {
        todos.value.push({txt:'落'})
    }
    return{
        todos,
        addTodo
    }
})
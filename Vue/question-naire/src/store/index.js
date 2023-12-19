import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {//全局的数据源  vue3语法，state函数，return 人家默认生成了对象
    return {
      questionList: [],
      itemNum: 1,// 第几题
      answerId: [],//存放答案
    }
  },
  getters: {//computed 计算属性
    rightAnswer(state){
      let arr = []
      for(let question of state.questionList.length ){
        for(let answer of question.topic_answer){
          if(answer.is_standard_answer = 1){
            arr.push(topic_answer_id)
          }
        }
      }
      return
    }
  },
  mutations: {//methods 同步的方式修改数据源
    getQuestionList(state, list) {
      state.questionList = list
    },
    recordAnswer(state, id) {
      state.answerId.push(id)
    },
    nextItem(state) {
      state.itemNum+=1
    }
  },
  actions: {// async methods 异步执行
    getQuestionListAction(context) {// context 代表整个store
      axios.get('https://www.fastmock.site/mock/98563a523b2e1a0daa3ccb4ae0495732/_test01/api/book')
        .then(res => {
          console.log(res);
          //触发getRequestionList
          context.commit('getQuestionList', res.data)
        })
    },
    recodeAnswerAction({ commit,state },id) {
      commit('recordAnswer',id)
      if(state.itemNum < state.questionList.length){
        commit('nextItem')
      }
    }
  },
  modules: {
  }
})

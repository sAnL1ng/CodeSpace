<template>
    <div>
        <h2>得分:{{ score}}</h2>
    </div>
</template>

<script>
import { mapState , mapGetters} from 'vuex'
export default {
    data(){
        return {
            score: 0
        }
    },
    computed: {
        ...mapState(['answerId']),
        ...mapGetters(['rightAnswer'])
    },
    created() {
        this.calcSCore()
    },
    methods: {
        calcSCore() {
            let every = 100 / this.answerId.length
            this.answerId.forEach((item,index) => {
                if(item === this.rightAnswer[index]){
                    this.score += every 
                }
            })
        }
    }
}
</script>

<style lang="less" scoped></style>
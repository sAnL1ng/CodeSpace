Vue.createApp({
    template: "#my-app",
    data() {
      return {
        count:1,
        books: [
          {
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
          },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },
        ]
      }
    },
    computed: {
      AllPrice(){
        let price = 0
        for(let item of this.books){
          price += item.price * item.count
        }
        return price
      }
    },
    methods: {
      add(i){
        this.books[i].count++
      },
      minus(i){
          this.books[i].count--
          if(this.books[i].count = 1){
            return 
          }
      },
      clear(i){
        this.books.splice(i,1)
      }
    }
  }).mount("#app");
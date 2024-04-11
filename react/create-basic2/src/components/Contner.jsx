import React, { Component } from 'react'

class Contner extends Component {
    state = {
        count: 0
    }

    setCount = () => { // 必须要用箭头函数不然this指向会丢失
        this.setState({ // 继承于Component  触发视图更新
            count: this.state.count++
        })
    }


    render() {
        return (
            <button onClick={this.setCount}>计数器 -- {this.state.count}</button>
        )
    }
}

export default Contner

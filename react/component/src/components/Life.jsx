import React, { Component, createRef } from 'react'

export default class Life extends Component {
    constructor() {
        super();
        this.ref = createRef()
        console.log('Life 组件开始加载', this.ref);
        this.state = {
            count: 1
        }
    }

    handlerClick = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
        // this.state.count++
        // this.forceUpdate() // 强制render强制调用
    }

    shouldComponentUpdate() {
        return false
        
    }

    componentDidMount() {
        console.log('Life 组件挂载完毕', this.ref);
    }

    componentDidUpdate() {
        console.log('Life 组件更新完成');
    }

    componentWillUnmount() {
        console.log('Life 组件即将卸载');
    }

    render() {
        console.log('Life 组件开始编译', this.ref);
        return (
            <div>
                <h4 ref={this.ref} onClick={() => this.handlerClick()}>{this.state.count}</h4>
            </div>
        )
    }
}

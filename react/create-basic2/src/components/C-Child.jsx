// 类编程组件通讯的写法
// import React, { Component } from 'react'

// export default class CChild extends Component {
//     render() {
//         return (
//             <div>
//                 <h4>子组件</h4>
//                 {this.props.msg}
//             </div>
//         )
//     }
// }

function CChild(props) {
    console.log(props);
    props.cb()
    // props.msg = '修改父组件传递的值'
    return (
        <div>
            <h4>子组件</h4>
            <p>{props.msg}</p>

        </div>
    )
}

export default CChild
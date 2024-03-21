// UI组件 连状态都没有 性能优化不需要更新
// store 
import * as React from "react"; // 引入FC 类型的声明

// 声明一个Props接口
interface Props {
    userName: string;
}


// functi Component 函数组件
// Props 参数对象
const Hello:React.FC<Props> = (Props) => {
    return (
        <h2>Hello {Props.userName}</h2>
    )
}

export default Hello
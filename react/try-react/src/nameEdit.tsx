// UI组件 连状态都没有 性能优化不需要更新
// store 
import * as React from "react"; // 引入FC 类型的声明

// 声明一个Props接口
interface Props {
    userName: string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
}


// functi Component 函数组件
// Props 参数对象
const NameEditComponent:React.FC<Props> = (Props) => {
    return (
        <div>
            <label>Update name:</label>
            <input value={Props.userName} onChange={Props.onChange}/>
        </div>
    )
}

export default NameEditComponent
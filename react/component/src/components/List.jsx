import propTypes from 'prop-types';

const List = props => {
    // console.log(props.colors);
    const arr = props.colors
    const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)

    return (
        <div>
            <ul>
                {lis}
            </ul>
             
            {/* <p>props的默认值:</p> */}
            
        </div>
    );
};

List.propTypes = { // 在为组件添加校验规则
    colors: propTypes.array,
    fn: propTypes.func.isRequired,
    obj: propTypes.shape({
        name: propTypes.string.isRequired,
        age: propTypes.number
    }).isRequired
}

export default List;
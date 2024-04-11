import { Consumer } from '../provider.jsx'


const BrotherB = props => {
    return (
        <Consumer>
            {
                value => (
                    <div>
                        <h4>子组件B  --- {value}</h4>
                    </div>
                )
            }
        </Consumer>

    );
};


export default BrotherB;
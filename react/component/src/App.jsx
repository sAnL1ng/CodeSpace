import List from './components/List'
import Page from './components/Page'
import Life from './components/Life'
import TodoList from './todoList/todoList.jsx'


const App = props => {
    const colors = [
        { id: 1, name: '红色' },
        { id: 2, name: '黄色' },
        { id: 3, name: '蓝色' },
    ]
    return (
        <div>
            <h2>Hello React</h2>

            {/* <List colors={colors} fn={() => {}} obj={{name:'Tom'}} /> */}
            {/* <Page page={100}/> */}
            {/* <Life /> */}
            <TodoList />

        </div>
    );
};

export default App;
import React from 'react'
import ExitComponent from './components/ExitComponent';
import ClassComponent from './components/ClassComponent'

class HelloVue extends React.Component {
    render() {
        return <h3>这是一个类组件</h3>
    }
}


function HelloReact() {
    const handle = () => {
        console.log('clicked');
    }
    return <div>
        <p>这是一个函数组件</p>
        <button onClick={handle}>click me</button>
    </div>
}


function App() {
    return (
        <div className="app">
            <HelloReact></HelloReact>
            <HelloVue />
            <hr />
            <ExitComponent />
            <ClassComponent />
        </div>
    )
}

export default App
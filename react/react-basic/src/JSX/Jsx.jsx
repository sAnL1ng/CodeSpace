// 根组件
import './App.css'

const songs = [
  { id: 1, name: '搁浅' },
  { id: 2, name: '说了再见' },
  { id: 3, name: '暗号' }
]

const flag = true

const styleObj = {
  color: 'blue'
}

const showGreen = false

function App() {
  return (
    <>

      <div className="app">
        <h2>hello</h2>
        <ul>
          {
            songs.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
        <h3>{flag ? 'Jay真帅吧' : 'Jay的歌真好听吧'}</h3>
        {/* {flag && <a href="#">哈哈哈哈哈</a>} */}
        {flag ? <a href="#">哈哈哈哈哈</a> : null}

        <h2 style={{ color: 'red' }}>红色字体</h2>

        <h2 style={styleObj}>蓝色字体</h2>

        <h2 className={showGreen ? 'green' : ''}>绿色字体</h2>
      </div>

      <div className="box">2222</div>

    </>
  )
}

export default App
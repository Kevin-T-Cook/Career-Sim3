import { Link } from 'react-router-dom'
import RouterComponent from './components/RouterComponent'
import './App.css'

function App() {

  return (
    <>
      <div>
        <nav>
          <div>
            <Link to="/posts">HOME</Link>
          </div>
          <div>
            <Link to="/singlepost/:_id">SINGLE POST</Link>
          </div>
        </nav>
        <RouterComponent />
      </div>
    </>
  )
}

export default App;

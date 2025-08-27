import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Header />
      <div className='overflow-hidden'>
        <Home />
      </div>
    </div>
  )
}

export default App
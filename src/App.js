import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/Rowpost/RowPost'
import { originals, trending, action, horror } from './constants/url'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><Navbar/>
      <Banner/>
      <RowPost url={originals} title="New Releases" isSmall={false} />
      <RowPost url={trending} title="Trending" isSmall={true} />      
      <RowPost url={action} title="Action" isSmall={true} />
      <RowPost url={horror} title="Horror" isSmall={true} />
    </div>
      
    </>
  )
}

export default App

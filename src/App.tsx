import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StartRating from './components/start-rating'
import ImageSlider from './components/slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import {menus} from './components/tree-view/data'

import './App.css'

function App() {

  return (
    <>
      <Accordian/>
      <RandomColor/>
      <StartRating/>
      <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limitResult={10}/>
      <LoadMoreData/>
      <TreeView menus={menus}/>
    </>
  )
}

export default App

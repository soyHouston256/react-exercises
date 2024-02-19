import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StartRating from './components/start-rating'
import ImageSlider from './components/slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import {menus} from './components/tree-view/data'

import './App.css'
import QrCodeGenerator from './components/qr-code-generator'
import LightDarkMode from './components/light-dark-mode'
import ScroollIndicatior from './components/scroll-indicator'
import Tabs from './components/custom-tabs/tabs'
import TabTest from './components/custom-tabs/tab-test'

function App() {

  return (
    <>
      <Accordian/>
      <RandomColor/>
      <StartRating/>
      <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limitResult={10}/>
      <LoadMoreData/>
      <TreeView menus={menus}/>
      <QrCodeGenerator/>
      <LightDarkMode/>
      <ScroollIndicatior url={`https://dummyjson.com/products?limit=50`}/>
      <TabTest/>
    </>
  )
}

export default App

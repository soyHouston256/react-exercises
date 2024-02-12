import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StartRating from './components/start-rating'
import ImageSlider from './components/slider'
import './App.css'
import LoadMoreData from './components/load-more-data'

function App() {

  return (
    <>
      <Accordian/>
      <RandomColor/>
      <StartRating/>
      <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limitResult={10}/>
      <LoadMoreData/>
    </>
  )
}

export default App

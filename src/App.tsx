import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StartRating from './components/start-rating'
import ImageSlider from './components/slider'

function App() {

  return (
    <>
      <Accordian/>
      <RandomColor/>
      <StartRating/>
      <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limit={4}/>
    </>
  )
}

export default App

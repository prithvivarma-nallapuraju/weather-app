import './App.css'
import TopButtons from '../components/TopButtons/TopButtons'
import Inputs from '../components/Inputs/inputs'
import TimeAndLocation from '../components/TimeAndLocation/timeAndLocation'
import TempAndDetails from '../components/tempAndDetails/tempAndDetails'
import Forecast from '../components/Forecast/Forecast'
function App() {
  
  return (
    <>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
          <TopButtons/>
          <Inputs/>
          <TimeAndLocation/>
          <TempAndDetails/>
          <Forecast title="Hourly forecast"/>
          <Forecast title="Daily forecast"/>
      </div>
    </>
  )
}

export default App


import './App.css'
import One from './one/One'
// import From from './components/from/From'

function App({asset}) {
 
  const assets='daimond';
  return (
      
      // gift.preventDefault
    
    <>
      <h1>Vite + React</h1>
      <One asset={assets}></One>
      {/* <From></From> */}
    </>
  )
}

export default App

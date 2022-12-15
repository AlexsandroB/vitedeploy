import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import End from './pages/End'


function App() {


  return (      
      <BrowserRouter>
        <Routes>


        <Route path='/vitedeploy/' element={<Home/>}/>
        <Route path='/vitedeploy/end' element={<End/>}/>



        </Routes>
      
      </BrowserRouter>
  )
}

export default App

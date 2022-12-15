import React from 'react'
import reactlogo from '@img/react.svg'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div>

        <img src={reactlogo}/>

        <button onClick={() => navigate('/vitedeploy/end')}>ir pro end</button>
    </div>
  )
}

export default Home
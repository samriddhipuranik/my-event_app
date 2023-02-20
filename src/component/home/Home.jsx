import React from "react"

import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
     
      
      <Recent />
    
      <Location />
      <Team />
      <Price />
    </>
  )
}

export default Home
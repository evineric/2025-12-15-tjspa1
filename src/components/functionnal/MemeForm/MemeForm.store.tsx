import React from 'react'
import StandalonMemeForm from './MemeForm'
import type { IMemeFormStored } from './MemeForm.interface'

const MemeForm:React.FC<IMemeFormStored>=(props) => {
  return (
    <StandalonMemeForm image={} meme={} onMemeChange={}/>
  )
}

export default MemeForm
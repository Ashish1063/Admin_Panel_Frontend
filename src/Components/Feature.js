import React from 'react'
import './feature.css'
import { MoreVertOutlined } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Feature = () => {
  return (
    <div className=' Feature'>
      <div className="top">
        <h5 className="title">Product Wise Volume Share (MTD)</h5>
        <MoreVertOutlined/>

      </div>
      <div className="bottom">
        <div className="CircularChart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={3}/>
        </div>
        <p className="title"></p>
      </div>
    </div>
  )
}

export default Feature
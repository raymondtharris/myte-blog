import React from 'react';
import {MyteFilter} from '../MyteFilter/MyteFilter'
import './MyteHeader.css'

export const MyteHeader = () => {
  return (
    <div className="Myte-Header">
      <div className="Myte-Header-Logo">wlw : Raymond Timothy Harris</div>
      <div><MyteFilter></MyteFilter></div>
      <div ><a href='https://www.github.com/raymondtharris'>Git</a></div>
      <div>About</div>
    </div>
  )
}

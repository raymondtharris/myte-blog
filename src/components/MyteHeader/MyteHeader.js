import React from 'react';
import {MyteFilter} from '../MyteFilter/MyteFilter'
import './MyteHeader.css'

export const MyteHeader = () => {
  return (
    <div className="Myte-Header">
      <div className="Myte-Header-Logo">wlw : Raymond Timothy Harris</div>
      <div className="MyteHeaderNav">
        <MyteFilter></MyteFilter>
        <button >GitHub</button>
        <button >About</button>
      </div>
    </div>
  )
}

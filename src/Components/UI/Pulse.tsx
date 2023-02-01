import React from 'react'
interface IProps{
  color: string,
  width: any,
  height: any,
  paused?:boolean
}
export const Pulse = ({color, height, width, paused}:IProps) => {
  return (
    <div className={paused ? "circle p-1" : "circle pulse p-1"} style={{backgroundColor:color, height, width}}></div>
  )
}

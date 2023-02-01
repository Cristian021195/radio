import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRadioSet } from '../../Hooks'
import { ISelected } from '../../Interfaces';

export const FooterPlayer = () => {
    const radio = useSelector((state: any)=>state.radio);
    const volume = useSelector((state: any)=>state.volume);
    const selected = useSelector((state: ISelected)=>state.selected);
    const dispatch = useDispatch();
    /*useEffect(()=>{
        dispatch({type:'PLAY', payload:{message:'asd'}})
    },[])*/
  return (
    <div className='row d-flex justify-content-end'>
        <div className='col-12 col-xxl-4 col-xl-6 col-lg-8 col-md-4 col-sm-6 p-2'>
            <div className='d-flex align-items-center justify-content-center'>
                <button onClick={()=>{
                    dispatch({type:'STOP', payload:{}})
                    radio?.radio.pause();radio?.radio.load();
                }} className='circle sq-dim-sm m-2'>■</button>
                <button onClick={()=>{
                    dispatch({type:'PLAY', payload:{...selected}})
                    radio?.radio.play().then((res:any)=>{}).catch((error:any)=>{
                        alert(`${error} - Error de URL: (url incompleta, o no es de formato stream)`)
                    })
                }} className='circle sq-dim-md m-2'>▶</button>
                <button onClick={()=>{
                    dispatch({type:'PAUSE', payload:{}})
                    radio?.radio.pause();
                }} className='circle sq-dim-sm m-2'>||</button>
            </div>
        </div>
        <div className='col-12 col-lg-4 col-md-8 col-sm-6 p-2 d-flex justify-content-evenly align-items-center'>
            <div className='d-flex align-items-center justify-content-center'>
                <button onClick={()=>{
                    if(radio.radio){radio.radio.volume = 0}
                }} className='circle sq-dim-sm'>🕪</button>
                <input type="range" name="volumen" id="volumen" step={0.1} min={0} max={1} value={volume.value} onChange={(e)=>{
                    dispatch({type:'VOLUME_SET', payload:{
                        value: parseFloat(e.target.value)
                    }})
                    
                    if(radio.radio){radio.radio.volume = parseFloat(volume.value)}
                }}/>
            </div>
        </div>
    </div>
  );
}

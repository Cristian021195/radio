import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IPropsPreset, ISelected, ISelector } from '../../Interfaces';
import { v4 as uuid } from 'uuid';

export const RadioList = () => {
    const radios = useSelector((state: ISelector)=>state.presets);
    const selected = useSelector((state: ISelected)=>state.selected);
    const radio = useSelector((state: any)=>state.radio);
    const dispatch = useDispatch();
    
    const [radioElement, setRadioElement] = useState<IPropsPreset>({id:uuid(), nombre:'', url:'', url_alt:''});

    /*const seleccionar = (id:any) => {
        let select = radios?.presets.find((el:IPropsPreset)=> el.id == id );
        dispatch({type: 'CAMBIAR', payload:{...select}})
    }*/
    return (
    <div>
        <h2>Listado de Radios</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch({type: 'AGREGAR', payload:{radio:radioElement}})
        }} className='d-flex flex-wrap'>
            <label className='w-100 d-flex justify-content-between align-items-center' htmlFor="nombre">Nombre:
                <input  required className='neuro-text' type="text" name='nombre' id='nombre' placeholder='Radio Rivadavia' onChange={(e)=>{setRadioElement({...radioElement, nombre: e.target.value})}}/>
            </label>
            <label className='w-100 d-flex justify-content-between align-items-center' htmlFor="url">Url / Enlace / Link:
                <input  required className='neuro-text'  type="text" name='url' id='url' placeholder='https://streaming01.shockmedia.com.ar:10307/stream' onChange={(e)=>{setRadioElement({...radioElement, url: e.target.value})}}/>
            </label>
            <label className='w-100 d-flex justify-content-between align-items-center' htmlFor="social">Web / Red Social:
                <input className='neuro-text' type="text" name='url_alt' id='social' placeholder='https://www.facebook.com/los40tucuman961' onChange={(e)=>{setRadioElement({...radioElement, social: e.target.value, url_alt: e.target.value})}}/>
            </label>
            <div className='d-flex justify-content-center w-100 m-2'>
                <button type="submit" className='btn p-2' style={{backgroundColor:'orange', color:'whitesmoke'}}>Agregar</button>
            </div>
        </form>
        <hr />
        <br />
        <div className=''>
            {radios?.presets?.length! > 0 ? 
            <>
                {radios?.presets?.map((e:IPropsPreset, e_id:number)=>{
                    return (
                        <React.Fragment key={e_id}>
                            <label className='d-flex align-items-center' htmlFor={e?.id}>{e?.nombre} <i>&nbsp;({e?.preset ? 'por defecto' : 'mis radios'})</i>
                                <input type="radio" name="selected_radio" id={e?.id} 
                                    defaultChecked={e?.id === selected?.selected?.id ? true : false} onChange={(e)=>{ 
                                        let select = radios?.presets.find((el:IPropsPreset)=> el?.id == e.target.id );
                                        radio?.radio.pause();
                                        dispatch({type: 'CAMBIAR', payload:{...select}})
                                        //console.log(selected?.selected) 
                                    }}/>
                            </label><br/>
                        </React.Fragment>
                    )
                })}
            </> : 
            <div>
                <p>¡Sin radios!</p>
            </div>}
        </div>
    </div>
    )
}

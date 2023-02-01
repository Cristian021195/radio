import { useDispatch, useSelector } from 'react-redux';
import { IPreset, ISelected, ISelector } from '../../Interfaces';

export const MainPlayer = () => {
    const radio = useSelector((state: any)=>state.radio);
    const selected = useSelector((state: ISelected)=>state.selected);
    const volume = useSelector((state: any)=>state.volume);
    const dispatch = useDispatch();
    //const radio = useSelector((state: any)=>state.radio);
    //console.log(radio)
    /*useEffect(()=>{
        dispatch({type:'PLAY', payload:{message:'asd'}})
    },[])*/

    return (
        <article>
            <div className='col-10 m-4'>
                Radio Seleccionada: <strong>{selected?.selected?.nombre}</strong>
            </div>
            <div className='col-12'>
                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    <button className='circle outlined sq-dim-md m-3' onClick={()=>{
                        dispatch({type:'STOP', payload:{}})
                        radio?.radio.pause();radio?.radio.load();
                    }}>■</button>
                    <button className='circle outlined sq-dim-xl m-3' onClick={()=>{
                        dispatch({type:'PLAY', payload:{...selected}})
                        radio?.radio.play();
                    }}>▶</button>
                    <button className='circle outlined sq-dim-md m-3' onClick={()=>{
                        dispatch({type:'PAUSE', payload:{}})
                        radio?.radio.pause();
                    }}>||</button>
                </div>
            </div>
            <div className='col-12'>
                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    <div style={{width:'100%'}} className='d-flex justify-content-evenly'>
                        <button onClick={(e)=>{
                            dispatch({type:'VOLUME_SET', payload:{
                                value: 0.0
                            }})
                            if(radio.radio){ radio.radio.volume = 0 }
                        }}>🕪</button>
                        <input type="range" name="volumen" id="volumen" step={0.1} min={0} max={1} value={volume.value} style={{width:'80%'}}
                            onChange={(e)=>{
                                dispatch({type:'VOLUME_SET', payload:{
                                    value: parseFloat(e.target.value)
                                }})
                                
                                if(radio.radio){radio.radio.volume = parseFloat(volume.value)}
                            }}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}

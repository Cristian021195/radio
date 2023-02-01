import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ISelected } from '../../Interfaces';
import { FooterPlayer, Pulse } from '../UI';

export const Footer = () => {
    const [bip, setBip] = useState<any>(undefined);
    useEffect(()=>{
        window.addEventListener('beforeinstallprompt', (event) => {
            setBip(event)
        });
    },[]);
    const radio = useSelector((state: any)=>state.radio);
    const dispatch = useDispatch();
    const selected = useSelector((state: ISelected)=>state.selected);
    const [pause,setPause] = useState();//<button onClick={()=>{console.log(radio.radio.paused)}}>asd</button>
    /*useEffect(()=>{
        console.log(radio.radio.paused)
    },[radio])*/
    return (
        <footer className=''>
            <div className='row px-5'>
                <div className='col-12 col-md-6 p-2 d-flex align-items-center'>
                    <b className='wave d-flex align-items-center p-1'>Sonando: &nbsp; <Pulse paused={radio.radio ? radio.radio.paused : false} color={radio.radio.paused ? '#ababab' : '#eb0000'} height='0.5em' width='0.5em'/>&nbsp;</b>
                    &emsp;{selected?.selected?.nombre || 'Sin radio seleccionada'}</div>
                <div className='col-12 col-md-6 p-2'>
                    <FooterPlayer/>
                    <div style={{textAlign:'end'}}>
                    {bip !== undefined ? <button
                    onClick={async ()=>{
                        if(bip) bip.prompt();
                        const biip = await bip?.userChoice;
                        if (biip?.outcome){
                            if (biip?.outcome === 'accepted') {setBip(null)}
                        }
                    }}
                    className='btn p-1' style={{backgroundColor:'coral', color:'whitesmoke', position:'absolute', bottom:'1em', right:'2em'}}>Instalar</button> : <></> }
                    </div>
                </div>
            </div>            
        </footer>
    )
}

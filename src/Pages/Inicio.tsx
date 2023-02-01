import React, { useEffect, useState } from 'react'
import { MainPlayer, RadioList } from '../Components';

export const Inicio = () => {
  const [bip, setBip] = useState<any>(undefined);
  useEffect(()=>{
        window.addEventListener('beforeinstallprompt', (event) => {
            setBip(event)
        });
  },[]);
  return (
    <section style={{textAlign:'center'}} className='pop-up mx-5'>
        <h1>Inicio</h1>
        <main className='row'>
          <div style={{textAlign:'start'}} className='col-md-5 col-12 my-3'>
            <div className='p-3 neuro-box'>
              <MainPlayer/>
            </div>
          </div>
          <div style={{textAlign:'start'}} className='offset-md-2 col-md-5 col-12 my-3'>
            <div className='p-3 neuro-box radio-list'>
              <RadioList/>
            </div>
          </div>
        </main>
    </section>
  )
}

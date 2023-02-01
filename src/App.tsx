import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { PublicRouter } from './Router/PublicRouter'
import { Footer, Header } from './Components/Layout';
import { store } from './Store/store'
import {presets} from './DB'


function App() {    

  useEffect(()=>{
    if(localStorage.getItem('radios') === null){
      localStorage.setItem('radios', JSON.stringify(presets))
    }
    if(localStorage.getItem('selected') === null){
      localStorage.setItem('selected', JSON.stringify(presets[0]))
    }
  },[])

  return (
      <Provider store={store}>
        <BrowserRouter>
            <div id="top">
            </div>
            <Header/>
            <PublicRouter/>
            <Footer/>
        </BrowserRouter>
      </Provider>
  )
}

export default App

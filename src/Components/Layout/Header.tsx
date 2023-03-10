import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='d-flex justify-content-end align-items-center'>
          <ul style={{display:'flex', justifyContent:'start'}} className='h-scroll-style'>
            <li>
                <NavLink className={({isActive})=> isActive === true ? 'actual' : ''} to={'/'}>Inicio</NavLink>
            </li>            
            <li>
                <NavLink className={({isActive})=> isActive === true ? 'actual' : ''} to={'/radios'}>Radios</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive === true ? 'actual' : ''} to={'/contacto'}>Contacto</NavLink>
            </li>
          </ul>
        </header>
      );
}
  
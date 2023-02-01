import React from 'react'
import headphone from '/icon.svg'

interface IProps {
    img?:any,
    title:string,
    desc:string,
    social?:string
}

export const CardImgDesc = ({img={headphone}, title='Titulo', desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta excepturi laudantium nemo dolores reprehenderit totam, asperiores culpa delectus officiis.', social='https://cristian021195.github.io/portfolio'}:IProps) => {
  return (
    <div className='card' style={{backgroundColor:'whitesmoke'}}>
        <div className="card-header">
            ​<picture className='d-flex'>
                <source srcSet={headphone} type="image/svg+xml" style={{width: '100%',height: 'auto'}}/>
                <img src={headphone} alt="MDN" style={{height: 'auto',width: '100%'}}/>
            </picture>
        </div>
        <div style={{backgroundColor:'#f0f0f0'}} className='p-1'>
            <div className="card-body my-2">
                <b>{title}</b>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-center align-items-end p-1">
                    <a className='btn p-1' href={social} target='_blank' rel='noreferrer noopener' style={{backgroundColor:'#F5B64E', color:'whitesmoke'}}>Visitar</a>
                </div>
            </div>
        </div>
    </div>
  )
}

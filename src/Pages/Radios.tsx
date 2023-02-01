import { useSelector } from 'react-redux';
import { CardImgDesc } from '../Components/UI/CardImgDesc';
import { IPropsPreset, ISelector } from '../Interfaces';
export const Radios = () => {
  const radios = useSelector((state: ISelector)=>state.presets);
  return (
    <section style={{textAlign:'center', paddingBottom: '15em'}} className='pop-up'>
        <h1>Radios</h1>
        <article className='d-flex flex-wrap justify-content-evenly'>
          {radios?.presets?.length! > 0 ? 
            <>
                {radios?.presets?.map((e:IPropsPreset, e_id:number)=>{
                    return (
                        //<React.Fragment key={e_id}>
                        <div key={e_id} className='m-2'>
                          <CardImgDesc social={e?.social} desc={e?.nombre} title={e?.nombre}/>
                        </div>
                    )
                })}
            </> : 
            <div>
                <p>¡Sin radios!</p>
            </div>}
          
        </article>
    </section>
  )//<a href="#top" style={{backgroundColor:'rgba(255,127,80,0.7)', color:'whitesmoke', padding:'1em', borderRadius:'50%', textDecoration:'none', position:'fixed', bottom:'1em', right:'1em'}}>▲</a>
}

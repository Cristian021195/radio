interface IProps{
    id:number,
    nombre:string,
    url:string,
    url_alt?:string
    preset?:boolean
    social?:string
}
export const presets:IProps[] = [//https://www.facebook.com/los40tucuman961
    {
        id:1, 
        nombre:'Los 40 Tucumán FM 96.1', 
        url:'https://streaming01.shockmedia.com.ar:10307/stream', 
        url_alt: 'https://streaming01.shockmedia.com.ar:10307/stream', preset:true,
        social:'https://www.facebook.com/los40tucuman961'
    },
    {
        id:2, 
        nombre:'Radio Duplex FM 88.1', 
        url:'https://streaming01.shockmedia.com.ar:10352/stream', 
        url_alt: 'https://streaming01.shockmedia.com.ar:10352/stream', preset:true,
        social:'https://www.radiostucuman.com/radio/1/rt-fm-881'
    },
    {
        id:3, 
        nombre:'Aqui Columbia 98.7 FM - 760 AM', 
        url:'https://s2.radio.co/s83b86382e/listen', 
        url_alt: 'https://s2.radio.co/s83b86382e/listen', preset:true,
        social:'https://www.facebook.com/ColumbiaDigitalcr'
    },
    {
        id:4, 
        nombre:'Radio Besame', 
        url:'https://26523.live.streamtheworld.com/BESAME_CR_SC', 
        url_alt: 'https://26523.live.streamtheworld.com/BESAME_CR_SC', preset:true,
        social:'https://www.facebook.com/besamecr'
    },
    {
        id:5, 
        nombre: 'Radio Rivadavia', 
        url:'https://26183.live.streamtheworld.com/LA_RED_AM910AAC_SC', 
        url_alt:'https://26183.live.streamtheworld.com/LA_RED_AM910AAC_SC', preset:false,
        social:'https://www.facebook.com/rivadavia630'
    }
];//https://26523.live.streamtheworld.com/BESAME_CR_SC
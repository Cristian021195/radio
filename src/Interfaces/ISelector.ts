export interface IPropsPreset{
    selected?:any
    id:any
    nombre:string
    url:string
    url_alt?:string
    preset?:boolean,
    social?:string
}
export interface IPreset {
    presets: IPropsPreset[]
    id:any,
    nombre:string,
    url:string
    url_alt?:string
}
export interface ISelector {
    presets?: IPreset
}

export interface ISelected {
    selected?: IPropsPreset
}
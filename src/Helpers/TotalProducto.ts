import { IProducto } from '../Interfaces';
export const totalProducto = (array:IProducto[]) => {
    let cont = 0;
    array.forEach((e:IProducto,e_i:number)=>{
        if(e.chekar){cont += e.total;}        
    })
    return cont;
}


/*

let audio = new Audio('https://streaming01.shockmedia.com.ar:10352/stream'); audio.id = 'reproductor'
		let llave = false;

		console.log(audio)

		function stopRefresh(){
			audio.load();
		}

		function pausa(){
			audio.pause();
		}

		function ejecutar(){
			audio.play();
		}
		function cambiarRadio(){
			llave = !llave;
			console.log(llave)
			if(llave){
				audio.src = 'https://streaming01.shockmedia.com.ar:10307/stream';
			}else{
				audio.src = 'https://streaming01.shockmedia.com.ar:10352/stream';
			}
		}

*/
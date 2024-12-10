function entrega(){

    alert("Vendo caja de vino set 2 Catena Zapata, oferta inicial 35000")
    let ofertaBase = 35000
    let ofertaUsuario = parseInt(prompt("ingresar oferta"))
    
    if ( ofertaUsuario < 32000){
        alert("Oferta baja")
    }else if((ofertaUsuario >= 32001) && (ofertaUsuario <=35000)){
        alert("Subir oferta")
    }else if( ofertaUsuario > ofertaBase){
        alert("Es tuyo, comunicarte al 1168926322 para coordinar entrega, gracias!")
    }
}

entrega() 
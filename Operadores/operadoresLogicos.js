const podeFormarCarga = true
const cargaERP = "56789"

function carga (){
    console.log("Sua carga está sendo formada")
    setTimeout(
        () => {const roteirizacao = "Sua carga foi formada"
        console.log(roteirizacao)}, 5000
    )}

if (podeFormarCarga == true && cargaERP){
    carga()
}else{
    console.log("Verifique se o pedido pode formar carga")
}

if (podeFormarCarga == true || cargaERP){
    console.log("Sua carga está sendo formada")
}else{
    console.log("Verifique se o pedido pode formar carga")
}

if (podeFormarCarga !== true && cargaERP){
    console.log("Sua carga está sendo formada")
}else{
    console.log("Verifique se o pedido pode formar carga")
}
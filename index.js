/* PRESENTACION DE LA PAGINA */
let Bienvenida = alert("Bienvenido a Indumentaria JS")
let nombre = prompt("Ingrese su nombre")
console.log("Usted ingreso como " + nombre)





/* PRECIOS DE LA PAGINA */


const precioRemera = 10000
const precioBuzos = 20000
const precioPantalon = 15000
let precioFinal = 0


/* FUNCION  */


// Calcular el IVA (21%)
const IVA = 0.21;



let totalConIva =  (precio, IVA) => {
    return  precio +(precio*IVA) 
    
}



/* PROMPTS Y SWITCHS */


let queVaAComprar = prompt("Que va comprar? Remeras, Buzos o Pantalon")
let cantidadArt = prompt ("Cantidad de articulos a comprar?")


    switch (queVaAComprar) {
        case "Remeras":
    
                precioFinal += precioRemera * cantidadArt;
                alert ("Su precio final con IVA es " + totalConIva (precioFinal,IVA))
                
                
                
            break
    
        case "Buzos":
            
                precioFinal += precioBuzos * cantidadArt;
                alert ("Su precio final con IVA es " + totalConIva (precioFinal,IVA))
                
                
            break
    
        case "Pantalon":
            
                precioFinal += precioPantalon * cantidadArt;
                alert ("Su precio final con IVA es " + totalConIva (precioFinal,IVA))
                
                
            break
        
        default:
            alert("El producto seleccionado " + queVaAComprar + " no esta disponible")
            

            break
            
        }
        
    

















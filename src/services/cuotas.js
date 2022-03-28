import {product} from '../model/product'
import ReactDOM from 'react-dom'
import React from 'react'



export async function Calcular_Cuota()
{
    
    try {
        let F = product.Frecuencia == 1 ? 30 :  product.Frecuencia;
        let R = (product.Tasa/365) *F ;
        let C = product.Monto;
        let M = product.Numero_Cuotas;
        let N = M * F;
        let P = C * ( R /( 1 - (1+R)**(-M)  ) )
        product.Cuota =  Math.round(P/5)*5;

        ReactDOM.render(<samp id="lblcuota" > {product.Cuota} </samp>,document.getElementById("lblcuota"))
        ReactDOM.render(<samp id="lblNcuota" > { product.Frecuencia == 1 ? product.Numero_Cuotas : product.Frecuencia == 15 ? product.Numero_Cuotas * 2 : product.Numero_Cuotas * 4  } </samp>,document.getElementById("lblNcuota"))




        ReactDOM.render(<o id="lblfecha" > {
            product.Frecuencia == 1 
                ? new Date(new Date().setMonth(5)).toJSON().slice(0,10).replace(/-/g,'/')
                : new Date(new Date().setDate(product.Frecuencia)).toJSON().slice(0,10).replace(/-/g,'/')
            } </o>,document.getElementById("lblfecha"))

        


    }
    catch(error){
        console.log(error);
    }
}

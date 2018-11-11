import { Vuelo } from '../vuelo/vuelo';
import { Actividad } from '../actividad/actividad';
import { Pago } from '../pago/pago';


export class Reserva {
    /**
    * id de la reserva
    */
    id: number;
    
    /**
    * cantidad personas de la reserva
    */
    cantidadPersonas: number;

    /**
    * Variable que indica si ya se pago la reserva
    */
    pagada:boolean;
    
     /**
    * costo de la reserva
    */
    costo: number;
    
    /**
    * costo de la reserva
    */
    fechaInicio: any;
    
    /**
    * costo de la reserva
    */
    fechaFin: any;
  
    /**
    * El vuelo de la reserva
    */
    vuelo: Vuelo;
    
    /**
    * La actividad de la reserva
    */
    actividad: Actividad;
    
    /**
    * costo de la reserva
    */
    idVuelo: number;
    
     /**
    * costo de la reserva
    */
    idAlojamiento: number;
    
     /**
    * costo de la reserva
    */
    idActividad: number;
    
     /**
    * costo de la reserva
    */
    idTransporteTerrestre: number;
 
    getTipo(): string{
        var tipo:string = "Sin Servicio Asociado"; 
        if (this.vuelo!=null) 
            tipo = "Vuelo"; 
        else if(this.actividad!=null) 
            tipo = "Actividad"; 
//        else if(this.alojamiento!=null) 
//            tipo = "Alojamiento"; 
//        else if(this.transporteTerrestre!=null) 
//            tipo = "TransporteTerrestre"; 
         
        return tipo;
    }

    getActividad() {
        var servicio:any; 
        if (this.vuelo!=null) 
            servicio = this.vuelo; 
        else if(this.actividad!=null) 
            servicio = this.actividad; 
//        else if(this.alojamiento!=null) 
//            tipo = "Alojamiento"; 
//        else if(this.transporteTerrestre!=null) 
//            tipo = "TransporteTerrestre"; 
         
        return servicio;
    }
    
    
        getTipoPorId() {
        var tipo:string = "Sin Servicio Asociado"; 
        if (this.idVuelo!=-1) 
            tipo = "Vuelo"; 
        else if(this.idActividad!=-1) 
            tipo = "Actividad"; 
//        else if(this.alojamiento!=null) 
//            tipo = "Alojamiento"; 
//        else if(this.transporteTerrestre!=null) 
//            tipo = "TransporteTerrestre"; 
         
        return tipo;
    }
    
}

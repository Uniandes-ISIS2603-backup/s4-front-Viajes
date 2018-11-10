import { Vuelo } from '../vuelo/vuelo';
import { Actividad } from '../actividad/actividad';


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
}

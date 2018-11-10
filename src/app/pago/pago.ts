import { Reserva } from '../reserva/reserva';


export class Pago {
    /**
    * id de la reserva
    */
    id: number;
    
    /**
    * Variable que indica si ya se pago la reserva
    */
    pagaConTarjeta:boolean;
    
     /**
    * costo de la reserva
    */
    tarjeta: string;
    

    /**
    * La actividad de la reserva
    */
    reserva: Reserva;
}

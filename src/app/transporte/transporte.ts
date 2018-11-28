import {Proveedor} from '../proveedor/proveedor';
import {TransporteB} from '../transporteb';

export class Transporte extends TransporteB{
    

    nombre: string;

    imagen:string;
    /**
     * Costo del transporte
     */
    costo: number;

    
    /**
     * Latitud origen
     */
    latitud: number;
     
    /**
     * Longitud origen
     */
    longitud: number;
     
     /**
      * Latitud destino
      */ 
    latitudDestino: number; 
      
     /**
      * Longitud destino 
      */
    longitudDestino: number;
  /**
   * La longitud destino del vuelo
   */
  duracion: number;
  /**
   * Origen del vuelo
   */
  origen: string;
  /**
   * Destino del vuelo
   */
  destino: string;
  /**
   * La fecha de salida del vuelo
   */
  fechasDisponibles: any[];
  /**
   * La fecha de llegada del vuelo
   */
  fechasLlegada: any[];
  /**
   * disponibilidadFecha
   */
  disponibilidadFecha: any[];
     /**
      * Puntuacion del transporte
      */
     puntuacion: number; 
     
     /**
      * Id del transporte
      */
     id: number; 
     
     /**
     * Proveedor del transporte
     */
     
     proveedor: Proveedor; 
}

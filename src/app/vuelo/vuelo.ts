export class Vuelo {
    /**
     * El identificador del vuelo
     */
    nombre: string;

    id:number;
    /**
     * El costo del vuelo
     */
    costo: number;
  /**
   * Puntuacion del vuelo
   */
    puntuacion: number;
    /**
     * La latitud origen del vuelo
     */
    latitud: number;
    /**
     * La longitud origen del vuelo
     */
    longitud: number;
    /**
     * La latitud destino del vuelo
     */
    latitudDestino: number;
    /**
     * La longitud destino del vuelo
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
   * Imagen del vuelo
   */
    imagen:string;
}





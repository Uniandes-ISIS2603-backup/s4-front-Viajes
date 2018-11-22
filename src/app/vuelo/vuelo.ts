export class Vuelo {
    /**
     * El identificador del vuelo
     */
    numero: string;

    id:number;
    /**
     * El costo del vuelo
     */
    costo: number;
    /**
     * La capacidad (pasajeros) del vuelo
     */
    capacidad: number;
    /**
     * La latitud origen del vuelo
     */
    latitudOrigen: number;
    /**
     * La longitud origen del vuelo
     */
    longitudOrigen: number;
    /**
     * La latitud destino del vuelo
     */
    latitudDestino: number;
    /**
     * La longitud destino del vuelo
     */
    longitudDestino: number;
    /**
     * La fecha de salida del vuelo
     */
    fechaSalida: any;
    /**
     * La fecha de llegada del vuelo
     */
    fechaLlegada: any;
}

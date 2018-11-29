import {Proveedor} from '../proveedor/proveedor';
import {Servicio} from '../servicio';

export class Alojamiento extends Servicio{
    
    /**
     * ID del alojamiento.
     */
    id: number; 
    
    /**
     * Costo del alojamiento.
     */
    costo: number;
    
    /**
     * Estrellas del alojamiento.
     */
    estrellas: number;

    /**
     * Nombre del alojamiento.
     */
    nombre: string;

    /**
     * Tipo del alojamiento.
     */
    tipo: string;

    /**
     * Noches del alojamiento.
     */
    noches: number;

    /**
     * Latitud del alojamiento.
     */
    latitud: number;

    /**
     * Longitud del alojamiento.
     */
    longitud: number;

    /**
     * Puntuacion del alojamiento.
     */
    puntuacion: number;

    /**
     * Ubicacion del alojamiento.
     */
    ubicacion: string;
    
    /**
     * Proveedor del alojamiento
     */
     
    //proveedor: Proveedor; 
}


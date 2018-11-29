/**
* This class represents a Activity of TripBuilder.
* It contains all the information relevant to the activitie.
*/
import {Servicio} from '../servicio';

export class Actividad extends Servicio{
    /**
    * The activity's cost
    */
    costo: number;

    /**
    * The activity´s time
    */
    duracion: number;

    imagen:string;

    /**
    * The activity's identificator
    */
    id: number;

    /**
    * Activity´s Latitude
    */
    latitud: number;

    /**
    * Activity´s Longitude
    */
    longitud: number;
    
      /**
    * Activity´s Puntuation
    */
    puntuacion: number;
    
    /**
    * Activity´s Name
    */
    nombre: string;

    fechasDisponibles: any[];

    disponibilidadFecha: any[];
    
    imagen: string;
}

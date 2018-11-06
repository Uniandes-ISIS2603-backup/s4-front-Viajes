/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export interface Alojamiento {
    
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
}


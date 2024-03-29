type DateString = {month: number,day: number,year: number};


export class Entrada {
        /**
    * El id de la entrada
    */
    id: number;

    /**
    * El titulo de la entrada
    */
    titulo: string;
    
        /**
    * El texto de contenido de la entrada
    */
    textoContenido: string;
    
     /**
    * La puntuacion dada a la entrada
    */
    puntuacion: number;
    
         /**
    * La puntuacion dada a la entrada
    */
    multimedia: string[];
    
    /**
     * La fecha en que se creó la entrada
     */
     fecha: DateString|string;
    
    
}

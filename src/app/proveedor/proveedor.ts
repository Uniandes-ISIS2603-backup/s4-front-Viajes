/**
 * Esta clase representa un proveedor de TripBuilder.
 *Contiene toda la informaciòn relevante a un vuelo
 */
export interface Proveedor {
  /**
   * El identificador del proveedor
   */
  id: number;

  /**
   * El user del proveedor
   */
  user: string;

  /**
   * La contraseña del proveedor
   */
  contrasena: string;

  /**
   * El nombre del proveedor
   */
  nombre: string;

  /**
   * La puntuacion del proveedor
   */
  puntaje: number;

}


/**
 * Esta clase representa un proveedor de TripBuilder.
 *Contiene toda la informaciòn relevante a un vuelo
 */
import {Vuelo} from '../vuelo/vuelo';
import {Servicio} from '../servicio';

export class Proveedor {
  /**
   * El identificador del proveedor
   */
  id: number;

  /**
   * El user del proveedor
   */
  username: string;

  /**
   * La contraseña del proveedor
   */
  password: string;

  /**
   * El nombre del proveedor
   */
  nombre: string;

  /**
   * La puntuacion del proveedor
   */
  puntuacion: number;

  /**
   * La imagen del proveedor
   */
  imagen: string;

}


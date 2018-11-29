import { Proveedor } from './proveedor';
import { Vuelo } from '../vuelo/vuelo';
  import { Actividad } from '../actividad/actividad';


export class ProveedorDetail extends Proveedor{
  servicios: Vuelo[];
}

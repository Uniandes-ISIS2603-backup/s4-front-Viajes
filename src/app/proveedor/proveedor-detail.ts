import { Proveedor } from './proveedor';
import { Vuelo } from '../vuelo/vuelo';
  import { Actividad } from '../actividad/actividad';


export interface ProveedorDetail extends Proveedor{
  vuelos: Vuelo[];
  actividades: Actividad[];
}

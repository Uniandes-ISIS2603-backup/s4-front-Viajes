import { Proveedor } from './proveedor';
import { Vuelo } from '../vuelo/vuelo';
  import { Actividad } from '../actividad/actividad';
import {Alojamiento} from '../alojamiento/alojamiento';
import {Transporte} from '../transporte/transporte';


export class ProveedorDetail extends Proveedor{
  vuelos: Vuelo[];

  alojamientos: Alojamiento[];

  actividades: Actividad[];

  transportes: Transporte[];
}

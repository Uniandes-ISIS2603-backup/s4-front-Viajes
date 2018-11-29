import { Proveedor } from './proveedor';
import { Vuelo } from '../vuelo/vuelo';
  import { Actividad } from '../actividad/actividad';
import {Alojamiento} from '../alojamiento/alojamiento';
import {Transporte} from '../transporte/transporte';
import {Servicio} from '../servicio';


export class ProveedorDetail extends Proveedor{

  servicios: Servicio[];
}

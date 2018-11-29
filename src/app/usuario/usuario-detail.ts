import {Usuario} from './usuario';
import {Entrada} from './entrada';
import {Medalla} from '../medalla/medalla';
import {Combo} from '../combo/combo';
import {Pago} from '../pago/pago';

export class UsuarioDetail extends Usuario {

    entradas: Entrada[];
    
    medallas: Medalla[];
    
    combos: Combo[];
    
    pagos: Pago[];

}

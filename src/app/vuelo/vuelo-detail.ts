import { Vuelo } from './vuelo';

export interface VueloDetail extends Vuelo {
  vuelo: Vuelo[];
}

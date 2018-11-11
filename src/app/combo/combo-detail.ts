import { Combo } from './combo';
import { Reserva } from '../reserva/reserva';

/**
* This class represents a book of the BookStore. 
* It contains all the information relevant to the book.
*/
export class ComboDetail extends Combo {
       
    reservas: Reserva[];
}

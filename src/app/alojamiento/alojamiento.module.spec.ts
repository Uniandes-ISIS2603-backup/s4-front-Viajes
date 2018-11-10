/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {AlojamientoModule} from './alojamiento.module';

describe('AlojamientoModule', () => {
    let alojamientoModule: AlojamientoModule;

    beforeEach(() => {
        alojamientoModule = new AlojamientoModule();
    });

    it('should create an instance', () => {
        expect(alojamientoModule).toBeTruthy();
    });
});


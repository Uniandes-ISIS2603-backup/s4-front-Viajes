/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {TransporteModule} from './transporte.module';

describe('TransporteModule', () => {
    let transporteModule: TransporteModule;

    beforeEach(() => {
        transporteModule = new TransporteModule();
    });

    it('should create an instance', () => {
        expect(transporteModule).toBeTruthy();
    });
});

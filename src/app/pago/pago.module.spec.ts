import {PagoModule} from './pago.module';

describe('PagoModule', () => {
    let pagoModule: PagoModule;

    beforeEach(() => {
        pagoModule = new PagoModule();
    });

    it('should create an instance', () => {
        expect(pagoModule).toBeTruthy();
    });
});



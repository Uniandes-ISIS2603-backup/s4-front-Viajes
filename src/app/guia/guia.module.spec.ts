import {GuiaModule} from './guia.module';

describe('GuiaModule', () => {
    let guiaModule: GuiaModule;

    beforeEach(() => {
        guiaModule = new GuiaModule();
    });

    it('should create an instance', () => {
        expect(guiaModule).toBeTruthy();
    });
});
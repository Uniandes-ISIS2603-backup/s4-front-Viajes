import {ComboModule} from './combo.module';

describe('ComboModule', () => {
    let comboModule: ComboModule;

    beforeEach(() => {
        comboModule = new ComboModule();
    });

    it('should create an instance', () => {
        expect(comboModule).toBeTruthy();
    });
});

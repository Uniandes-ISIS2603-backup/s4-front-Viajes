import { VueloModule } from './vuelo.module';

describe('VueloModule', () => {
  let vueloModule: VueloModule;

  beforeEach(() => {
    vueloModule = new VueloModule();
  });

  it('should create an instance', () => {
    expect(vueloModule).toBeTruthy();
  });
});

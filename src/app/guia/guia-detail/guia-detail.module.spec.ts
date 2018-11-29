import { GuiaDetailModule } from './guia-detail.module';

describe('GuiaDetailModule', () => {
  let guiaDetailModule: GuiaDetailModule;

  beforeEach(() => {
    guiaDetailModule = new GuiaDetailModule();
  });

  it('should create an instance', () => {
    expect(guiaDetailModule).toBeTruthy();
  });
});
